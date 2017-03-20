// DOM is now ready anytime we use the 500px library we start with _500px
'use vstrict';

$(document).ready(function () {
  _500px.init({
    sdk_key: //Add API Key Here
  });
  $('#login').click(function(){
      _500px.login();
  });
  //when page is done loading whenever authoriazation is confirmed do the following
  _500px.on('authorization_obtained', function () {
      $('.sign-in-view').hide();
      $('.image-results-view').show();
      //check if current browser supports geo-location or
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
          // console.log(position);
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          console.log('lat'+ lat);
          console.log('long'+ long);
          var radius = '10mi';
          var searchOptions = {
              geo: lat + ',' + long + ',' + radius,
              only: 'Landscapes',
              sort: 'rating',
              rpp: 28
          }
          _500px.api('/photos/search', searchOptions, function(response){
              if(response.data.photos.length===0) {
                  console.log('No photos found');
              } else {
                  console.log('Request Succeeded');
                  console.log(response);
                  //here we will put in our hw... look at documentation for sample data you can get back
                  //console.log the response inspect the object 1. iterate through response data 2. write code to take image url into image element and stick the new image elsement to the html page. also need to have a class value of image to all the images. so there is already a class name with images and we are going to append our new images to the div
                  //select an object and then run jquery.each() -this lets us iterate over arrays and objects ex: $.each(object, callback) see url that sasha sends over
                  //once you finish delete your api key before you push it up to the repo
                  var $images_container = $(".images");
                  var image_array = response.data.photos;

                  //Iterate through all images
                  for(var i = 0; i < image_array.length; i++) {
                    var this_image_url = image_array[i].image_url;
                    var $img = $('<img>');

                    $img.attr("src", this_image_url).addClass("image");
                    $images_container.append($img);
                  }
              }
          });
          });
      } else {
          $('.images').append('Sorry, this browser does not support geolocation');
      }
  });
});
