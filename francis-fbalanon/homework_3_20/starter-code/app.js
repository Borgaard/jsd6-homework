$(document).ready(function () {

  _500px.init({
     sdk_key: '159ef5ed3e3f0a94f3e9af3066f9a5589a5db0a6'
  });

  $('#login').click(function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function () {
 
    $(".sign-in-view").hide();
    $(".image-results-view").show();
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ' + lat);
        console.log('long: ' + long);

        var radius = "10mi";

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          sort: 'highest_rating',
          rpp: 28
        }

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log("No photos found");
          } else {
            console.log('Request succeeded');
            console.log(response);

            for (var i = 0; i < response.data.photos.length; i++) {

            var $newPhoto = $("<img>").attr('src', response.data.photos[i].image_url);
            $(".images").append($newPhoto);
            }
          


          }
        })
      });
    } else {
      $('.images').append('Sorry, this brower does not support geolocation');
    }
  });

});







//$("div:first").addClass("image-results-view");
    //$("div:last").removeClass("image-results-view");

