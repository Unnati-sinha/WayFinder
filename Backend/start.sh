#!/bin/bash
# WayFinder Startup Script

echo "Starting WayFinder Application..."

# Check if Maven wrapper exists
if [ -f "mvnw" ]; then
    echo "Using Maven wrapper..."
    ./mvnw spring-boot:run
elif command -v mvn &> /dev/null; then
    echo "Using system Maven..."
    mvn spring-boot:run
else
    echo "Maven not found. Please install Maven or use the Maven wrapper."
    echo "You can download Maven from: https://maven.apache.org/download.cgi"
    exit 1
fi
