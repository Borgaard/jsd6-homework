//v1/photos/search?term=latitude,longitude,radius<units>Acceptable units are km or mi
//https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos_search.md
//mlombardo-macbookair1:starter-code mlombardo$ http-server -p 8080


$(document).ready(function () {
  console.log("hello1");

  _500px.init({
    sdk_key: 'e79fd0579223622406e9c160a5dcb49fbb6981b9'
  });

  $('#login').click(function() {
    _500px.login();
    console.log("hello2");

  });

  _500px.on('authorization_obtained', function () {

    console.log("hello3");
    console.log(navigator);

    $('.sign-in-view').hide();
    $('.image-results-view').show();


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("hello4");
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ' + lat);
        console.log('long: ' + long);

        var radius = '10mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          rpp: 28,
          sort: "highest_rating"
        }
console.log("hello5");
        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found');
          } else {
            console.log('Request succeeded!');
            console.log(response);
            var arrayA = [];

            for (var i = 0; i < response.data.photos.length; i++) {
              arrayA.push(response.data.photos[i].image_url);
            }
            console.log(arrayA);

            for (var i = 0; i < arrayA.length; i++) {
              var DOM_img = document.createElement("img");
              DOM_img.src = arrayA[i];
              $('.images').append(DOM_img);
              $("img").css("height", 150);
              $("img").css("width", 150);
            }
            //test
            console.log(DOM_img);


          }
        })
      });
    } else {
      $('.images').append('Sorry, this browser does not support geolocation');
    }
  });
});
