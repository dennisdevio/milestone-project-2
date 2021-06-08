// GET LAT & LONG POSITION OF MAP WHEN CLICKED 

function initMap() {
  const myLatlng = { "lat": 50.04547664384781, "lng": 14.446421043851618 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.6,
    center: myLatlng,
  });

  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });
  infoWindow.open(map);

  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {

    // Close the current InfoWindow.
    infoWindow.close();

    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
  });
}



function getFormattedAddressfromLatLng(lat, lng) {

  // Make API call
  // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1e6714aaee09a8d6bf6a45044ae56971

  fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=lat,lng&key=1e6714aaee09a8d6bf6a45044ae56971").then((data) => {
    return data.results[0].formatted_address;
  })
} function getWeatherFromLatLong(lat, lng) {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lng&appid=1e6714aaee09a8d6bf6a45044ae56971").then((data) => {
    return data;
  })
}


