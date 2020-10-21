 // Initialize and add the map
 function initMap() {
    // The location of LOCATION
    const location = { lat: 39.739235, lng: -104.990250 };
    // The map, centered at LOCATION
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: location,
    });
    // The marker, positioned at LOCATION
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }