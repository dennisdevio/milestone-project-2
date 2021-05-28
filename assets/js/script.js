// OBTAIN MODAL

var modal = document.getElementById("aboutModal");



// OBTAIN MODAL LINK

var modalLink = document.getElementById("myModalLink");



// OBTAIN EXT BUTTON FOR MODAL

var span = document.getElementsByClassName("exitModal")[0];



// OPEN THE MODAL ON LINK CLICK

modalLink.onclick = function() {
    
    modal.style.display = "block";

}



// CLOSE THE MODAL ON EXIT BUTTON CLICK

span.onclick = function() {

    modal.style.display = "none";

}



// CLOSE THE MODAL ON SCREEN CLICK OUTSIDE EXIT BUTTON

window.onclick = function(event) {

    if (event.target == modal) {

        modal.style.display = "none";

    }

}