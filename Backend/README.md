# WayFinder - Travel Planning Application

A full-stack travel planning application with user authentication built using Spring Boot and vanilla HTML/CSS/JavaScript.

## Features

- ✅ **User Authentication**: JWT-based login/signup system
- ✅ **Travel Planning**: Browse destinations, plan trips, view profiles
- ✅ **Responsive Design**: Modern, mobile-friendly UI
- ✅ **Database Persistence**: H2 database with file-based storage for portability

## Quick Start

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
   # Option 1: Using Maven wrapper (recommended)
   ./mvnw spring-boot:run

   # Option 2: Using system Maven
   mvn spring-boot:run

   # Option 3: Using the startup script
   ./start.sh  # Linux/Mac
   start.bat   # Windows
   ```

3. **Access the application**:
   - Open your browser and go to: `http://localhost:8080`
   - You'll be redirected to the login page
   - Create an account or login to access the full application

### Database
- **Location**: `./Backend/data/wayfinder.mv.db`
- **Portable**: The database file is stored in the project, so you can copy the entire project to another machine and run it

### Project Structure
```
WayFinder/
├── Backend/                 # Spring Boot application
│   ├── src/main/resources/static/  # Static HTML/CSS/JS files
│   ├── pom.xml             # Maven dependencies
│   └── data/               # H2 database files (auto-created)
├── Home.html              # Main pages (served by Spring Boot)
├── SignIn.html
├── SignUp.html
└── README.md
```

## Troubleshooting

### Application Won't Start
1. **Check Java version**: Ensure you have Java 17+
2. **Check Maven**: Ensure Maven is installed or use the wrapper
3. **Port conflicts**: Make sure port 8080 is available
4. **Database permissions**: Ensure the application can create files in the `data/` directory

### Static Files Not Loading
- All static files should be in `Backend/src/main/resources/static/`
- The application serves files from `/static/` path

### Authentication Issues
- JWT secret key is configured in `application.properties`
- Tokens are stored in localStorage on the client side
- Database stores user credentials (no password hashing in this demo)

## Development

### Adding New Pages
1. Create HTML file in `Backend/src/main/resources/static/`
2. Add CSS file with same name
3. Update navigation links in existing pages

### Database Changes
- The H2 database file is in `Backend/data/`
- Schema is auto-created on startup
- Data persists between runs

## Security Note

This is a demo application. In production:
- Add password hashing (currently stores plain text)
- Use HTTPS
- Implement proper session management
- Add input validation and sanitization
