@echo off
echo Starting WayFinder Application...

REM Check if Maven wrapper exists
if exist "mvnw.cmd" (
    echo Using Maven wrapper...
    call mvnw.cmd spring-boot:run
) else if exist "mvnw" (
    echo Using Maven wrapper...
    call mvnw spring-boot:run
) else (
    echo Maven not found. Please install Maven or use Maven wrapper.
    echo You can download Maven from: https://maven.apache.org/download.cgi
    pause
    exit /b 1
)
