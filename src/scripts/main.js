var test = 1;
var animate_time = 200;
var is_form_show = false;
var break_point = 768;
var is_small_screen = $(window).width() < break_point;

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

/**
  *call contact form click event function
  **/
show_contact_form = function() {
  $('#pageslide').animate(
    {
      "display": "block",
      "right": "0px"
    }, animate_time);

    $('body').animate(
      {
        "margin-left": "-450px"
      },animate_time);
}
/**
  *hide contact form click event function
  **/
hide_contact_form = function() {
  $('#pageslide').animate(
    {
      "display": "block",
      "right": "-450px"
    }, animate_time);

    $('body').animate(
    {
      "margin-left": "0px"
    },animate_time);
}

      
$(".button").on("click", function( e ) {

  e.preventDefault();
  if(is_form_show) {
    //form is showing, need hide
    hide_contact_form();
    is_form_show = false;
  } else {
    //form is hiding, need show
    show_contact_form();
    is_form_show = true;
  }

});
