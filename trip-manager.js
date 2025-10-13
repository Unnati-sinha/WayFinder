// Trip Manager - Handles adding/removing trips and localStorage management

class TripManager {
  constructor() {
    this.TRIPS_KEY = 'wayfinder_trips';
    this.initializeStorage();
  }

  // Initialize localStorage if not exists
  initializeStorage() {
    if (!localStorage.getItem(this.TRIPS_KEY)) {
      localStorage.setItem(this.TRIPS_KEY, JSON.stringify([]));
    }
  }

  // Get all trips from localStorage
  getAllTrips() {
    try {
      return JSON.parse(localStorage.getItem(this.TRIPS_KEY)) || [];
    } catch (error) {
      console.error('Error loading trips:', error);
      return [];
    }
  }

  // Save trips to localStorage
  saveTrips(trips) {
    try {
      localStorage.setItem(this.TRIPS_KEY, JSON.stringify(trips));
      return true;
    } catch (error) {
      console.error('Error saving trips:', error);
      return false;
    }
  }

  // Add a location to trips
  addToTrips(locationName) {
    const trips = this.getAllTrips();

    // Check if location is already in trips
    if (this.isInTrips(locationName)) {
      console.log(`${locationName} is already in trips`);
      return false;
    }

    // Get location details
    const location = getLocationByName(locationName);
    if (!location) {
      console.error(`Location ${locationName} not found`);
      return false;
    }

    // Create trip object
    const trip = {
      id: Date.now().toString(),
      name: location.name,
      dateAdded: new Date().toISOString(),
      status: 'upcoming',
      location: location,
      plannedDate: this.getSuggestedDate(location),
      route: null // Will be generated later
    };

    // Add to trips
    trips.push(trip);
    const saved = this.saveTrips(trips);

    if (saved) {
      // Show success message
      this.showNotification(`${location.name} added to your trips!`, 'success');

      // Trigger custom event for other components
      window.dispatchEvent(new CustomEvent('tripAdded', {
        detail: { trip: trip }
      }));
    }

    return saved;
  }

  // Remove a location from trips
  removeFromTrips(locationName) {
    const trips = this.getAllTrips();
    const filteredTrips = trips.filter(trip => trip.name !== locationName);

    if (filteredTrips.length === trips.length) {
      console.log(`${locationName} not found in trips`);
      return false;
    }

    const saved = this.saveTrips(filteredTrips);

    if (saved) {
      this.showNotification(`${locationName} removed from your trips`, 'info');

      // Trigger custom event
      window.dispatchEvent(new CustomEvent('tripRemoved', {
        detail: { locationName: locationName }
      }));
    }

    return saved;
  }

  // Check if a location is in trips
  isInTrips(locationName) {
    const trips = this.getAllTrips();
    return trips.some(trip => trip.name === locationName);
  }

  // Get suggested travel date based on best time to visit
  getSuggestedDate(location) {
    const today = new Date();
    const currentMonth = today.getMonth();

    // Parse best time to visit and suggest next available period
    const bestTime = location.bestTimeToVisit;
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Simple logic: suggest 3 months from now as default
    const suggestedDate = new Date(today);
    suggestedDate.setMonth(today.getMonth() + 3);

    return suggestedDate.toISOString().split('T')[0];
  }

  // Generate trip summary for display
  getTripSummary(locationName) {
    const trips = this.getAllTrips();
    return trips.find(trip => trip.name === locationName);
  }

  // Get all trips for display in My Trips page
  getTripsForDisplay() {
    return this.getAllTrips().map(trip => ({
      name: trip.name,
      image: trip.location.images[0],
      date: trip.plannedDate,
      status: trip.status,
      id: trip.id
    }));
  }

  // Show notification
  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '500',
      zIndex: '1000',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    });

    // Set background color based on type
    switch (type) {
      case 'success':
        notification.style.backgroundColor = '#10b981';
        break;
      case 'error':
        notification.style.backgroundColor = '#ef4444';
        break;
      case 'warning':
        notification.style.backgroundColor = '#f59e0b';
        break;
      default:
        notification.style.backgroundColor = '#3b82f6';
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Update trip status (upcoming, completed, cancelled)
  updateTripStatus(locationName, status) {
    const trips = this.getAllTrips();
    const tripIndex = trips.findIndex(trip => trip.name === locationName);

    if (tripIndex === -1) {
      return false;
    }

    trips[tripIndex].status = status;
    return this.saveTrips(trips);
  }

  // Get trip statistics
  getTripStats() {
    const trips = this.getAllTrips();
    return {
      total: trips.length,
      upcoming: trips.filter(t => t.status === 'upcoming').length,
      completed: trips.filter(t => t.status === 'completed').length,
      cancelled: trips.filter(t => t.status === 'cancelled').length
    };
  }
}

// Create global trip manager instance
const tripManager = new TripManager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TripManager;
}
