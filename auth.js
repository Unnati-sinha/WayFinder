// Authentication utility functions
class AuthManager {
    static TOKEN_KEY = 'authToken';
    static USER_ID_KEY = 'userId';

    // Check if user is authenticated
    static isAuthenticated() {
        const token = localStorage.getItem(this.TOKEN_KEY);
        return token && !this.isTokenExpired(token);
    }

    // Get stored token
    static getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    // Get stored user ID
    static getUserId() {
        return localStorage.getItem(this.USER_ID_KEY);
    }

    // Get redirect URL after login
    static getRedirectAfterLogin() {
        return localStorage.getItem('redirectAfterLogin');
    }

    // Clear redirect URL after login
    static clearRedirectAfterLogin() {
        localStorage.removeItem('redirectAfterLogin');
    }

    // Check if token is expired (basic check - in production you'd want proper JWT validation)
    static isTokenExpired(token) {
        if (!token) return true;
        try {
            // Basic check - decode JWT payload
            const parts = token.split('.');
            if (parts.length !== 3) return true; // Invalid JWT format

            const payload = JSON.parse(atob(parts[1]));
            const currentTime = Date.now() / 1000;

            // Check if token is expired
            return payload.exp && payload.exp < currentTime;
        } catch (e) {
            // If we can't decode the token, consider it expired/invalid
            return true;
        }
    }

    // Logout user
    static logout() {
        // Clear token from localStorage
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_ID_KEY);

        // Clear token from cookies
        document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        window.location.href = 'SignIn.html';
    }

    // Add authorization header to axios requests
    static setupAxiosInterceptors() {
        // Request interceptor to add auth token
        axios.interceptors.request.use(
            (config) => {
                const token = this.getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                    // Also set token in cookie for direct navigation
                    document.cookie = `authToken=${token}; path=/; max-age=${7 * 24 * 60 * 60}`; // 7 days
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Response interceptor to handle 401 errors
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    // Token might be expired or invalid
                    this.logout();
                }
                return Promise.reject(error);
            }
        );
    }

    // Initialize authentication on page load
    static init() {
        this.setupAxiosInterceptors();

        // Check authentication status on protected pages
        if (this.requiresAuth() && !this.isAuthenticated()) {
            window.location.href = 'SignIn.html';
        }
    }

    // Check if current page requires authentication
    static requiresAuth() {
        const currentPage = window.location.pathname.split('/').pop().toLowerCase();
        return !['signin.html', 'signup.html', ''].includes(currentPage) &&
               !currentPage.endsWith('.css') &&
               !currentPage.endsWith('.js');
    }
}

// Initialize auth manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    AuthManager.init();

    // Add logout functionality to logout buttons if they exist
    const logoutButtons = document.querySelectorAll('[data-logout]');
    logoutButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            AuthManager.logout();
        });
    });
});

// Export for use in other scripts
window.AuthManager = AuthManager;
