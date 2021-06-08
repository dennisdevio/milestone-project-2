// INITIALIZE MAP ON SCREEN

function initalizeMap() {
    const initialLatLng = { "lat": 50.04547664384781, "lng": 14.446421043851618 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4.6,
        center: initialLatLng,
    });
}