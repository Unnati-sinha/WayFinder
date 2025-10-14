package com.wayfinder.Backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Controller
public class ViewController {

    @GetMapping({"/", "/home"})
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
        // Check if user is authenticated
        String authenticatedUser = (String) request.getAttribute("authenticatedUser");
        if (authenticatedUser == null) {
            return "redirect:/SignIn.html";
        }
        return "forward:/Explore.html";
    }

    @GetMapping("/mytrips")
    public String myTrips(HttpServletRequest request) {
        // Check if user is authenticated
        String authenticatedUser = (String) request.getAttribute("authenticatedUser");
        if (authenticatedUser == null) {
            return "redirect:/SignIn.html";
        }
        return "forward:/Mytrips.html";
    }

    // Handle location details with a parameter-based approach
    @GetMapping("/location")
    public String locationDetails(@RequestParam String location, HttpServletRequest request) {
        // Check if user is authenticated
        String authenticatedUser = (String) request.getAttribute("authenticatedUser");
        System.out.println("ViewController.locationDetails: location=" + location + ", authenticatedUser=" + authenticatedUser);

        if (authenticatedUser == null) {
            System.out.println("User not authenticated, redirecting to SignIn.html");
            return "redirect:/SignIn.html";
        }
        System.out.println("User authenticated, forwarding to location-details.html");
        return "forward:/location-details.html";
    }

    @GetMapping("/profile")
    public String profile(HttpServletRequest request) {
        // Check if user is authenticated
        String authenticatedUser = (String) request.getAttribute("authenticatedUser");
        if (authenticatedUser == null) {
            return "redirect:/SignIn.html";
        }
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
