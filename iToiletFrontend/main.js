var gMap = document.querySelector('google-map');

function coord (lat, long) {
  this.lat = lat;
  this.long = long;
}

gMap.addEventListener('api-load', function(e) {
  //getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(getPositionCallback);
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}

function getPositionCallback(position) {
  // return new coord(position.coords.latitude, position.coords.longitude);
  gMap.latitude = position.coords.latitude;
  gMap.longitude = position.coords.longitude;


    debugger;
    var currentMarker = new google.maps.Marker({
      map: gMap.getMapOptions(),
      position: new google.maps.LatLng(gMap.latitude, gMap.longitude),
      title: "Your location",
      draggable: true,
      visible: true
    });

}
