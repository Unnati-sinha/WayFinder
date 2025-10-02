# WayFinder - Travel Planning Application

WayFinder is a web-based travel planning application that helps users explore destinations, plan trips, and manage their travel itineraries in one place.

## Features

- Browse and search travel destinations
- Plan and manage trips
- User profile management
- Responsive design for all devices

## Prerequisites

- Java 17 or higher
- Maven 3.6.3 or higher (for Maven builds)
- Node.js and npm (for frontend development, if applicable)

## Getting Started

### Using IDE (IntelliJ IDEA / Eclipse / VS Code)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Open the project** in your preferred IDE:
   - For IntelliJ: `File` > `Open` > Select the project folder
   - For Eclipse: `File` > `Import` > `Maven` > `Existing Maven Projects`
   - For VS Code: Open the project folder and install recommended extensions

3. **Run the application**
   - Locate the main class: `WayFinderApplication.java`
   - Right-click and select `Run 'WayFinderApplication'`
   - The application will start on `http://localhost:8080`

### Using Maven

1. **Navigate to the project directory**
   ```bash
   cd Backend
   ```

2. **Build the project**
   ```bash
   mvn clean install
   ```

3. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

4. Access the application at `http://localhost:8080`

### Using Docker (if configured)

1. **Build the Docker image**
   ```bash
   docker build -t wayfinder .
   ```

2. **Run the container**
   ```bash
   docker run -p 8080:8080 wayfinder
   ```

3. Access the application at `http://localhost:8080`

## Project Structure

```
WayFinder/
├── Backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/wayfinder/Backend/
│   │   │   │   ├── controller/    # Controllers
│   │   │   │   ├── model/         # Data models
│   │   │   │   ├── repository/    # Data access
│   │   │   │   └── service/       # Business logic
│   │   │   └── resources/
│   │   │       └── static/        # Frontend files (HTML, CSS, JS)
│   │   └── test/                  # Test files
│   └── pom.xml                    # Maven configuration
└── README.md                      # This file
```

## Configuration

Configuration files are located in `src/main/resources/`:
- `application.properties` - Main configuration file

## Built With

- [Spring Boot](https://spring.io/projects/spring-boot) - Backend framework
- [Maven](https://maven.apache.org/) - Dependency Management
- [HTML/CSS/JavaScript](https://developer.mozilla.org/en-US/docs/Web) - Frontend

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


