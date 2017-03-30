$(document).ready(function () {

  _500px.init({
    sdk_key: '159ef5ed3e3f0a94f3e9af3066f9a5589a5db0a6'
  });

  $('button').on('click', function(event) {
    console.log("login button clicked");
    _500px.login();
  });

  _500px.on('authorization_obtained', function () {

    $('.sign-in-view').hide();
    $('.image-results-view').show();

    //display user info on the site
    _500px.api('/users', function (response) {
      var firstName = response.data.user.firstname;
      var $welcome = $('<h4>');
      $welcome.text('Welcome to paradise, ' + firstName);
      $('.image-results-view h3').append($welcome);
    });

// navigator.geolocation.getCurrentPosition not working so I'm hardcoding my coordinates

/*
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) { //hard code coordinates if needed
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ' + lat);
        console.log('long: ' + long);
*/

  //find photos
    (function generatePics(){
        var lat = 22.196600;
        var long = -159.619801;
        var radius = '100mi';
        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          sort: 'rating',   //sort by highest rated
          rpp: 28           //show 28 results
        };

        _500px.api('/photos/search', searchOptions, function(response) {
            if (response.data.photos.length === 0) {
              console.log('No photos found');
            } else {
              displayPics(response);
            }
          });
      })();

  //display photos
    function displayPics(picsOpject){
      picsOpject.data.photos.forEach(function(pic){
        var img = $('<img class="image">');
        img.attr('src', pic.image_url);
        $('.images').append(img);
      });
    }

  });
});
