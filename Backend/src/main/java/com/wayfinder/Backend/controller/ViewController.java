package com.wayfinder.Backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpServletRequest;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Controller
public class ViewController {

    @GetMapping({"", "/", "/home"})
    public String home(HttpServletRequest request) {
        // Check if user is authenticated
        String authenticatedUser = (String) request.getAttribute("authenticatedUser");
        if (authenticatedUser == null) {
            return "redirect:/SignIn.html";
        }
        return "forward:/Home.html";
    }

    @GetMapping("/explore")
    public String explore(HttpServletRequest request) {
        // Allow guest access to explore page
        return "forward:/Explore.html";
    }

    @GetMapping("/mytrips")
    public String myTrips(HttpServletRequest request) {
        // Allow access to mytrips page
        return "forward:/Mytrips.html";
    }

    // Handle location details with a parameter-based approach
    @GetMapping("/location-details.html")
    public String locationDetails(HttpServletRequest request) {
        // Allow guest access to location details page
        return "forward:/location-details.html";
    }

    @GetMapping("/profile")
    public String profile(HttpServletRequest request) {
        // Allow access to profile page
        return "forward:/Profile.html";
    }

    // Authentication pages - no auth check needed
    @GetMapping("/signin")
    public String signin() {
        return "forward:/SignIn.html";
    }

    @GetMapping("/signup")
    public String signup() {
        return "forward:/SignUp.html";
    }
}
