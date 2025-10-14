# WayFinder - Travel Planning Application

WayFinder is a modern travel planning application that allows users to explore destinations, create detailed trip plans, and generate AI-powered travel routes using Google's Gemini API.

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Maven (or use the included Maven wrapper)

### Running the Application

1. **Navigate to the Backend directory**:
   ```bash
   cd Backend
   ```

2. **Start the application**:
   ```bash
   # Using Maven wrapper (recommended)
   ./mvnw spring-boot:run

   # Or using system Maven
   mvn spring-boot:run
   ```

3. **Access the application**:
   - Open your browser: `http://localhost:8080`
   - Login or create an account to access the full application

### 🔐 Authentication Features

- **User Registration**: Create new accounts with email/password
- **Secure Login**: JWT-based authentication system
- **Session Management**: Automatic token handling and logout
- **Protected Routes**: All main features require authentication

## Features

### 🗺️ Destination Exploration
- Browse popular travel destinations with beautiful imagery
- Filter destinations by category (Beach, Mountain, City, Adventure)
- Click on any destination card to view detailed information

### 📋 Detailed Location Pages
- **Location Details**: Complete information about each destination
- **Image Gallery**: Multiple high-quality images with thumbnail navigation
- **Price Information**: Cost per person estimates
- **Places to Visit**: Curated list of must-see attractions
- **Travel Tips**: Practical advice for travelers
- **Weather Information**: Current weather and best time to visit

### 🎯 Trip Management
- **Add to My Trips**: Save destinations for planning
- **Local Storage**: Trip data persists between sessions
- **Trip Status**: Mark trips as upcoming, completed, or cancelled
- **Trip Statistics**: Track total, upcoming, and completed trips

### 🤖 AI-Powered Route Generation
- **Gemini API Integration**: Uses Google's Gemini Flash 2.5 model
- **Smart Itineraries**: Generates 7-day detailed travel plans
- **Daily Breakdown**: Day-by-day activities and recommendations
- **Cost Estimates**: Budget planning for each day
- **Local Tips**: Cultural insights and practical advice

## Technology Stack

### Frontend
- **HTML5**: Semantic markup with responsive design
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: Clean, dependency-free implementation
- **Local Storage**: Client-side data persistence

### Backend
- **Spring Boot**: Java-based web framework
- **REST APIs**: JSON-based API endpoints
- **Maven**: Dependency management
- **Gemini API**: Google AI integration

## Setup Instructions

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- Google Gemini API key

### Backend Setup

1. **Navigate to Backend Directory**
   ```bash
   cd Backend
   ```

2. **Configure Gemini API Key**
   - Open `src/main/resources/application.properties`
   - Replace `YOUR_GEMINI_API_KEY_HERE` with your actual Gemini API key
   - Get your API key from [Google AI Studio](https://aistudio.google.com/)

3. **Install Dependencies**
   ```bash
   mvnd clean install
   ```

4. **Run the Application**
   ```bash
   mvnd spring-boot:run
   ```

The backend server will start on `http://localhost:8080`

### Frontend Setup

The frontend consists of static HTML, CSS, and JavaScript files that are served by the Spring Boot backend. No additional setup is required for the frontend.

## How to Use

### 1. Explore Destinations
- Visit `http://localhost:8080/explore`
- Browse through destination cards
- Use filter buttons to narrow down by category
- Click any destination card to view details

### 2. View Location Details
- Click on any destination card from the Explore page
- View comprehensive information including:
  - Image gallery with multiple photos
  - Price per person estimates
  - Places to visit with descriptions
  - Travel tips and recommendations
  - Weather information

### 3. Add to My Trips
- From the location details page, click "➕ Add to My Trips"
- The destination will be saved to your trip list
- View saved trips on `http://localhost:8080/mytrips`

### 4. Generate Travel Routes
- After adding a destination to your trips, the system will automatically generate a detailed 7-day itinerary
- The AI-powered route includes:
  - Daily activity breakdown
  - Recommended places to visit
  - Transportation suggestions
  - Cost estimates
  - Local tips and cultural insights

### 5. Manage Your Trips
- Visit `http://localhost:8080/mytrips` to view all saved trips
- See trip status (upcoming/completed)
- Click "View Details" to see the generated route
- Remove trips when no longer needed

## API Endpoints

### Generate Route
- **URL**: `POST /api/generate-route`
- **Request Body**:
  ```json
  {
    "location": "Santorini"
  }
  ```
- **Response**:
  ```json
  {
    "route": "Generated 7-day itinerary...",
    "timestamp": "2024-01-01T00:00:00Z"
  }
  ```

## File Structure

```
WayFinder/
├── Backend/                    # Spring Boot application
│   ├── src/main/java/...      # Java source files
│   ├── src/main/resources/    # Configuration files
│   └── pom.xml               # Maven dependencies
├── location-details.html      # Location detail pages
├── location-details.css       # Styling for details
├── locations.js              # Location data and utilities
├── trip-manager.js           # Trip management logic
├── Explore.html              # Main exploration page
├── Explore.css               # Exploration page styles
├── Mytrips.html              # My trips page
├── Mytrips.css               # Trip management styles
└── README.md                 # This file
```

## Development Notes

### Adding New Destinations
1. Add location data to `locations.js`
2. Update the Explore.html cards to include the new destination
3. Ensure all required fields are provided (images, prices, places, etc.)

### Customizing AI Prompts
- Modify the `createRoutePrompt()` method in `RouteController.java`
- Adjust the prompt to generate different types of itineraries
- Experiment with different Gemini models for varied results

### Styling
- All CSS files use modern CSS features (Grid, Flexbox, CSS Variables)
- Responsive design works on mobile and desktop
- Easy to customize colors and typography

## Troubleshooting

### Common Issues

1. **Gemini API Key Not Working**
   - Ensure the API key is valid and has proper permissions
   - Check rate limits and quotas in Google AI Studio

2. **Images Not Loading**
   - Verify image URLs are accessible
   - Consider using local image assets for better reliability

3. **Trips Not Persisting**
   - Check browser console for localStorage errors
   - Ensure JavaScript is enabled

4. **Backend Not Starting**
   - Verify Java 17+ is installed
   - Check Maven installation
   - Review application logs for errors

## Future Enhancements

- User authentication and profiles
- Trip sharing and collaboration
- Real-time weather integration
- Booking system integration
- Mobile app development
- Advanced filtering and search
- Trip expense tracking
- Photo upload and sharing

## License

This project is for educational purposes. Please ensure compliance with API terms of service for any production use.

## Support

For issues or questions, please check the troubleshooting section or create an issue in the project repository.


