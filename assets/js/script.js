
// FUNCTION TO DISPLAY 'GOOGLE MAPS' WITH LATITUDE AND LONGITUDE ON UI

function initMap() {
    
    const myLatLng = {"lat": 48.877129237390534, "lng": 16.348485731049607};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4.6,
        center: myLatLng,
    });

    let infoWindow = new google.maps.InfoWindow({
        content: "<b>Click anywhere to see the current weather</b>",
        position: myLatLng,
    });
    infoWindow.open(map);

    map.addListener("click", async(mapsMouseEvent) => {
        
        infoWindow.close();
        
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        
        const latLngJSON = mapsMouseEvent.latLng.toJSON();
        infoWindow.setContent(
            `<b>Latitude:</b> ${latLngJSON.lat},
            <br>
            <b>Longitude:</b> ${latLngJSON.lng}`
        );
        infoWindow.open(map);
        
        getWeatherFromLatLng(latLngJSON);
    });
}


// FUNCTION TO GET WEATHER DATA FROM 'OPENWEATHER' API FOR ANY LATITUDES & LONGITUDES

function getWeatherFromLatLng({lat,lng}) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2d420febf90e081391f8f4596c78f54a`)

        .then((resp) => resp.json())
        .then((data) => {
           
            showWeatherOnUI(data);
            return data;
        });
}


// FUNCTION TO SHOW WEATHER DATA ON UI OBTAINED FROM 'OPENWEATHER' API FOR ANY CLICKED 'GOOGLE MAPS' LATITUDE & LONGITUDE 

function showWeatherOnUI(weatherData) {
   
    const mainData = weatherData.main;

    const currentTemp = convertTempFromKelvinToCelcius(mainData.temp);
    const feelsLikeTemp = convertTempFromKelvinToCelcius(mainData.feels_like);
    const maxTemp = convertTempFromKelvinToCelcius(mainData.temp_max);
    const minTemp = convertTempFromKelvinToCelcius(mainData.temp_min);
    const humidity = mainData.humidity;
    
    document.getElementById('mainData').innerHTML = `

        <div>Current temp: <b>${currentTemp} °C</b></div>
        <div>Feels like: <b>${feelsLikeTemp} °C</b></div>
        <div>Max observed temp: <b>${maxTemp} °C</b></div>
        <div>Min observed temp: <b>${minTemp} °C</b></div>
        <div>Humidity: <b>${humidity} %</b></div>
    `;
}


// FUNCTION TO CONVERT TEMPERATURE OBTAINED FROM 'OPENWEATHER' API DISPLAYED IN KELVIN TO CELCIUS 

function convertTempFromKelvinToCelcius(tempInK) {
    
    return parseFloat((tempInK-273.15).toFixed(1));
}

