function initMap () {
    var location = {lat: 26.025650, lng: 43.476921};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location
    });
    var marker = new google.maps.Marker({
        position:  location,
        map: map

    });
}

