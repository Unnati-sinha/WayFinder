package com.wayfinder.Backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ViewController {

    @GetMapping({"/", "/home"})
    public String home() {
        return "forward:/Home.html";
    }

    @GetMapping("/explore")
    public String explore() {
        return "forward:/Explore.html";
    }

    @GetMapping("/mytrips")
    public String myTrips() {
        return "forward:/Mytrips.html";
    }

    // Handle location details with a parameter-based approach
    @GetMapping("/location")
    public String locationDetails(@RequestParam String location) {
        return "forward:/location-details.html";
    }

    @GetMapping("/profile")
    public String profile() {
        return "forward:/Profile.html";
    }
}
