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
    map.addListener("click", async(mapsMouseEvent) => {
        
        // Close the current InfoWindow.
        infoWindow.close();
        
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        
        const latLngJSON = mapsMouseEvent.latLng.toJSON();
        infoWindow.setContent(
            JSON.stringify(latLngJSON, null, 2)
        );
        
        infoWindow.open(map);
        // Fetch weather
        
        getWeatherFromLatLng(latLngJSON);
        //Show weather on UI
    });
}



function getFormattedAddressfromLatLng(lat, lng) {
    // Make API call
    fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=lat,lng&key=1e6714aaee09a8d6bf6a45044ae56971").then((data) => {
        return data.results[0].formatted_address;
    })
}



function getWeatherFromLatLng({lat,lng}) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e6714aaee09a8d6bf6a45044ae56971`)
        .then((resp) => resp.json())
        .then((data) => {
            showWeatherOnUI(data);
            return data;
        })
}



function showWeatherOnUI(weatherData) {
   
    const mainData = weatherData.main;

    const maxTemp =  mainData.temp_max;
    const minTemp =  mainData.temp_min;
    const feelsLikeTemp = mainData.feels_like_temp;
    const currentTemp = mainData.current_temp;

    document.getElementById('mainData').innerHTML = `
       <div>Maximum temp ${maxTemp}</div>
       <div>Minimum temp ${minTemp}</div>
       <div>Feels like temp ${feelsLikeTemp}</div>
       <div>Current temp ${currentTemp}</div>
    `;
    console.log(weatherData);
}


