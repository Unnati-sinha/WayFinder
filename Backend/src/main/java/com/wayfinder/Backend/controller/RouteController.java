package com.wayfinder.Backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.json.JSONObject;
import org.json.JSONArray;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class RouteController {

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    @PostMapping("/generate-route")
    public ResponseEntity<String> generateRoute(@RequestBody RouteRequest request) {
        try {
            // Create the request body for Gemini API
            JSONObject requestBody = new JSONObject();
            requestBody.put("contents", new JSONArray()
                .put(new JSONObject()
                    .put("parts", new JSONArray()
                        .put(new JSONObject()
                            .put("text", createRoutePrompt(request.getLocation()))
                        )
                    )
                )
            );

            // Set up headers
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");

            // Create the HTTP entity
            HttpEntity<String> entity = new HttpEntity<>(requestBody.toString(), headers);

            // Make the API call
            RestTemplate restTemplate = new RestTemplate();
            String url = GEMINI_API_URL + "?key=" + geminiApiKey;

            ResponseEntity<String> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                entity,
                String.class
            );

            // Parse the response and extract the generated route
            JSONObject responseJson = new JSONObject(response.getBody());
            String generatedRoute = responseJson
                .getJSONArray("candidates")
                .getJSONObject(0)
                .getJSONObject("content")
                .getJSONArray("parts")
                .getJSONObject(0)
                .getString("text");

            // Create a formatted response
            RouteResponse routeResponse = new RouteResponse(generatedRoute);

            return ResponseEntity.ok(routeResponse.toJsonString());

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(
                new RouteResponse("Error generating route: " + e.getMessage()).toJsonString()
            );
        }
    }

    private String createRoutePrompt(String location) {
        return String.format(
            "Create a detailed 7-day travel itinerary for %s. " +
            "Include daily activities, recommended places to visit, " +
            "best times for activities, transportation suggestions, " +
            "and estimated costs per day. " +
            "Format the response as a day-by-day breakdown with clear sections. " +
            "Make it practical and include tips for travelers. " +
            "Focus on the most popular and must-see attractions. " +
            "Include meal suggestions and accommodation recommendations. " +
            "Keep the tone friendly and informative.",
            location
        );
    }

    // Request DTO
    public static class RouteRequest {
        private String location;

        public RouteRequest() {}

        public RouteRequest(String location) {
            this.location = location;
        }

        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
    }

    // Response DTO
    public static class RouteResponse {
        private String route;
        private String timestamp;

        public RouteResponse(String route) {
            this.route = route;
            this.timestamp = java.time.Instant.now().toString();
        }

        public String getRoute() { return route; }
        public String getTimestamp() { return timestamp; }

        public String toJsonString() {
            JSONObject json = new JSONObject();
            json.put("route", this.route);
            json.put("timestamp", this.timestamp);
            return json.toString();
        }
    }
}
