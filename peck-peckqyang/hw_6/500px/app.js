// run http server: http-server -p 3000
// 1. Get user's geo
// 2. add images. add with image class

var photos;
var radius = '10mi';
var searchOptions = {
  only: 'Landscapes',
  sort: 'rating',
  image_size: '200, 1080',
  rpp: 28
}

$(document).ready(function () {
  _500px.init({
    sdk_key: '159ef5ed3e3f0a94f3e9af3066f9a5589a5db0a6'
  });
});

$('#login').click(function() {
    _500px.login();
});

_500px.on('authorization_obtained', function () {
    $('.sign-in-view').hide(500);
    $('.image-results-view').show(500);
});

$('#loadImages').click(function() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        $('.images').append("Geolocation is not supported by this browser.");
    }
})

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    searchOptions.geo = lat + ',' + lon + ',' + radius;
    getImages();
    $('#loadImages').hide();
}

function getImages() {
    _500px.api('/photos/search', searchOptions, function (response) {
      if (response.data.photos.length === 0) {
        console.log('No photos found');
      } else {
        console.log(response.data.photos);
        photos = response.data.photos;
        renderImages(photos);
        console.log('Request succeeded');
      }
    });
}

function renderImages(photos) {
    photos.forEach( function(photo) {
        let thumbnailURL = photo.images[0].url;
        let fullSizeImageURL = photo.images[1].url;
        console.log(thumbnailURL);
        console.log(fullSizeImageURL);
        let $imageLink = $('<a>').attr({
            'href': fullSizeImageURL,
            'target': '_blank'
        });
        let $imageThumbnail = $('<img>').attr({
            'src': thumbnailURL,
            'class': 'image'
        });
        $('.images').append($imageLink);
        $imageLink.append($imageThumbnail);
    });
}

