$(document).ready(function () {

  _500px.init({
    sdk_key: '35c1be7761e69050a7221a53d519255ffa17edb5'
  });

  $('#login').click(function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function () {

    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ' + lat);
        console.log('long: ' + long);

        var radius = '10mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          sort: 'highest_rating',
          rpp: 28,
          image_size: 200
        }

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found');
          } else {
            console.log('Request succeeded!');
            console.log(response);

            for (var i=0; i<response.data.photos.length;i++){
            console.log(response.data.photos[i].image_url);
            var url = response.data.photos[i].image_url;
            $('.images').append('<img id="images" src='+url+'>');
          }}
        })

        //adding code to return photo results here.
        

      });
    } else {
      $('.images').append('Sorry, this browser does not support geolocation');
    }
  });

});