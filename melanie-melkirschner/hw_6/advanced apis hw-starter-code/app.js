



  // DOM is now ready anytime we use the 500px library we start with _500px
  $(document).ready(function () {

    _500px.init({
      sdk_key: '159ef5ed3e3f0a94f3e9af3066f9a5589a5db0a6'
    });

    $('#login').click(function(){
      console.log("testing");
      _500px.login();
    });
  //when page is done loading whenever authoriazation is confirmed do the following 
  _500px.on('authorization_obtained', function () {

    $('.sign-in-view').hide();
    $('.image-results-view').show();

  //check if current browser supports geo-location or not
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
    sort: 'highest_rating',
    rpp: 28
  }

  _500px.api('/photos/search', searchOptions, function(response){
    if(response.data.photos.length===0) {
     console.log('No photos found');
    } else {
     console.log('Request Succeeded');
     console.log(response);
     var photoObject = response.data.photos;
    // console.log(photoObject);
    //iterate through response data
    $.each(photoObject, function(picture){

      //add image and image url as src, add image class to new image
      var createImage = $('<img>').attr('src', picture.image_url).addClass('image');
      //add new image element to the html section of page with images class
      $('.images').append(createImage); 
    }); 
    
  }
});
});
  } else {
    $('.images').append('Sorry, this browser does not support geolocation');
  }
});

});



