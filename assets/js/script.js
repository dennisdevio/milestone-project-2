
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
            JSON.stringify(latLngJSON, null, 2)
        );
        infoWindow.open(map);
        
        getWeatherFromLatLng(latLngJSON);
    });
}



// FUNCTION TO GET WEATHER DATA FROM 'OPENWEATHER' API FOR ANY LATITUDES & LONGITUDES

function getWeatherFromLatLng({lat,lng}) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e6714aaee09a8d6bf6a45044ae56971`)

        .then((resp) => resp.json())
        .then((data) => {
           
            showWeatherOnUI(data);
            return data;
        })
}



// FUNCTION TO SHOW WEATHER DATA ON UI OBTAINED FROM 'OPENWEATHER' API FOR ANY CLICKED 'GOOGLE MAPS' LATITUDE & LONGITUDE 

function showWeatherOnUI(weatherData) {
   
    const mainData = weatherData.main;

    const maxTemp =  convertTempFromKelvinToCelcius(mainData.temp_max);
    const minTemp =  convertTempFromKelvinToCelcius(mainData.temp_min);
    const feelsLikeTemp = convertTempFromKelvinToCelcius(mainData.feels_like);
    const currentTemp = convertTempFromKelvinToCelcius(mainData.temp);
   
    document.getElementById('mainData').innerHTML = `

        <div>Current temp: <b>${currentTemp} °C</b></div>
        <div>Feels like: <b>${feelsLikeTemp} °C</b></div>
        <div>Maximum temp: <b>${maxTemp} °C</b></div>
        <div>Minimum temp: <b>${minTemp} °C</b></div>

    `;
    console.log(weatherData);
}



// FUNCTION TO CONVERT TEMPERATURE OBTAINED FROM 'OPENWEATHER' API DISPLAYED IN KELVIN TO CELCIUS 

function convertTempFromKelvinToCelcius(tempInK) {
    
    return parseFloat((tempInK-273.15).toFixed(1));
}

