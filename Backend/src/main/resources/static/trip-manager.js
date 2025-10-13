// Trip Manager for handling user's saved trips
let TripManager = (function() {
  'use strict';

  // Private variables
  let trips = JSON.parse(localStorage.getItem('wayfinderTrips') || '[]');

  // Private methods
  function saveTrips() {
    localStorage.setItem('wayfinderTrips', JSON.stringify(trips));
  }

  function isInTrips(locationName) {
    return trips.some(trip => trip.name === locationName);
  }

  function addToTrips(locationName) {
    if (!isInTrips(locationName)) {
      trips.push({
        name: locationName,
        dateAdded: new Date().toISOString(),
        completed: false
      });
      saveTrips();
      return true;
    }
    return false;
  }

  function removeFromTrips(locationName) {
    const index = trips.findIndex(trip => trip.name === locationName);
    if (index > -1) {
      trips.splice(index, 1);
      saveTrips();
      return true;
    }
    return false;
  }

  function getAllTrips() {
    return [...trips];
  }

  function markAsCompleted(locationName) {
    const trip = trips.find(trip => trip.name === locationName);
    if (trip) {
      trip.completed = true;
      trip.dateCompleted = new Date().toISOString();
      saveTrips();
    }
  }

  function getTripStats() {
    return {
      total: trips.length,
      completed: trips.filter(trip => trip.completed).length,
      pending: trips.filter(trip => !trip.completed).length
    };
  }

  // Public API
  return {
    isInTrips,
    addToTrips,
    removeFromTrips,
    getAllTrips,
    markAsCompleted,
    getTripStats
  };
})();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TripManager;
}
