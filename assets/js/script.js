function initMap() {
    
    const myLatlng = {"lat": 48.877129237390534, "lng": 16.348485731049607};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4.6,
        center: myLatlng,
    });

    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "<b>Click anywhere to see the current weather</b>",
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
    const feelsLikeTemp = mainData.feels_like;
    const currentTemp = mainData.temp;

    document.getElementById('mainData').innerHTML = `
       <div>Maximum Temperature: ${maxTemp}</div>
       <div>Minimum Temperature: ${minTemp}</div>
       <div>Current Temperature: ${currentTemp}</div>
       <div>Feels Like: ${feelsLikeTemp}</div>
    `;
    console.log(weatherData);
}


