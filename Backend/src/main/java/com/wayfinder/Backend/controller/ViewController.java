package com.wayfinder.Backend.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/profile")
    public String profile() {
        return "forward:/Profile.html";
    }

    @GetMapping(value = "/{filename:.+}.css", produces = "text/css")
    @ResponseBody
    public Resource serveCss(@PathVariable String filename) {
        return new ClassPathResource("static/" + filename + ".css");
    }
}
