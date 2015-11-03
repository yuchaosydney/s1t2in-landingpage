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
  
  var iconBase = 'images/';
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
    $('body').attr('style','position: absolute;right: 0; width: 100%;');
    $('body').animate(
      {
        "right": ($('#pageslide').width())
      },animate_time);
}
/**
  *hide contact form click event function
  **/
hide_contact_form = function() {
  $('#pageslide').animate(
    {
      "display": "block",
      "right": -1 * ($('#pageslide').width())
    }, animate_time);

    $('body').animate(
    {
      "right": "0px"
    },animate_time,function(){
      $('body').attr('style','position: relative;');
    });
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

/**ajax sending email**/
$('#pageslide input[type=submit]').click(function(e){
  e.preventDefault();
  
  $.ajax({
    url: 'send_form_email.php',
    data: $("#pageslide form").serialize(),
    error: function(data) {
      alert("fatal error: please contact developer.");
    },
    success: function(data) {
      obj = $.parseJSON(data); 
      errorStr = "";
      if(obj.errors.name != null) {
        errorStr += obj.errors.name + "\n";
      }
      
      if(obj.errors.phone != null) {
        errorStr += obj.errors.phone + "\n";
      }
      
      if(obj.errors.email != null) {
        errorStr += obj.errors.email + "\n";
      }
      
      if(obj.errors.message != null) {
        errorStr += obj.errors.message + "\n";
      }

      if(errorStr == "") {
        alert("Your email has been received. Thanks for contacting!"); 
        $('#modal-lukk').trigger("click"); 
      }else {
        alert(errorStr); 
      }
    },
    type: 'POST'
  });
});
