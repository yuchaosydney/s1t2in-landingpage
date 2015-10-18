var test = 1;

function initMap() {
  var myLatLng = {lat: -33.889218, lng: 151.204917};
  var centerLatLng = {lat: -33.8877994, lng: 151.1802392};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: centerLatLng,
    scrollwheel:  false
  });
  
  var iconBase = 'http://localhost:3000/images/';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon: iconBase + 'map_icon.png'
  });
}
