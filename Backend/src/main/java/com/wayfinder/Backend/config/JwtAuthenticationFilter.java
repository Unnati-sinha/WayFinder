package com.wayfinder.Backend.config;

import com.wayfinder.Backend.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                  @NonNull HttpServletResponse response,
                                  @NonNull FilterChain filterChain) throws ServletException, IOException {

        String path = request.getRequestURI();
        System.out.println("JwtAuthenticationFilter checking path: " + path);

        // Get the Authorization header
        String authHeader = request.getHeader("Authorization");
        System.out.println("Authorization header: " + (authHeader != null ? "present" : "null"));

        String email = null;

        // Check if the header starts with "Bearer "
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7); // Remove "Bearer " prefix
            System.out.println("Bearer token found, validating...");

            // Validate the token
            if (jwtUtil.validateToken(token)) {
                email = jwtUtil.getEmailFromToken(token);
                System.out.println("Token valid for user: " + email);
            } else {
                System.out.println("Token validation failed");
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Invalid or expired token");
                return;
            }
        } else {
            System.out.println("No Bearer token found, checking cookies...");
            // Check for token in cookies as fallback for direct navigation
            jakarta.servlet.http.Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (jakarta.servlet.http.Cookie cookie : cookies) {
                    System.out.println("Cookie: " + cookie.getName() + " = " + (cookie.getValue() != null ? "present" : "null"));
                    if ("authToken".equals(cookie.getName())) {
                        String token = cookie.getValue();
                        System.out.println("Auth token cookie found, validating...");
                        if (jwtUtil.validateToken(token)) {
                            email = jwtUtil.getEmailFromToken(token);
                            System.out.println("Cookie token valid for user: " + email);
                            break;
                        } else {
                            System.out.println("Cookie token validation failed");
                        }
                    }
                }
            } else {
                System.out.println("No cookies found");
            }
        }

        if (email != null) {
            // Set the user email as a request attribute for later use
            request.setAttribute("authenticatedUser", email);
            System.out.println("Set authenticatedUser: " + email);
        } else {
            System.out.println("No authenticated user found");
        }

        // Continue the filter chain
        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(@NonNull HttpServletRequest request) throws ServletException {
        // Skip JWT validation for these paths
        String path = request.getRequestURI();

        // Allow authentication endpoints and static resources without JWT
        return path.startsWith("/api/auth/") ||
               path.startsWith("/SignIn.html") ||
               path.startsWith("/SignUp.html") ||
               path.startsWith("/signin") ||
               path.startsWith("/signup") ||
               path.endsWith(".css") ||
               path.endsWith(".js") ||
               path.endsWith(".png") ||
               path.endsWith(".jpg") ||
               path.endsWith(".jpeg") ||
               path.endsWith(".gif") ||
               path.endsWith(".svg");
    }
}
