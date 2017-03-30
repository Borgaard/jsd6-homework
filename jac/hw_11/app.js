/* Assignment:
Using the 500px API documentation, customize the search results for the app we created today to do the following:
1. Iterate through API call response to add photos to DOM and style them appropriately.
2. Sort photo results by rating (highest rated first)
3. Return 28 photos instead of the default 20
4. Bonus: Display the current user’s information on the site after a successful login.
5. Delete API key before pushing to homework repo (or figure out how to store it in a file ignored by git).
*/

// wait for page to load so that we can manipulate DOM
$(document).ready(function () {

// initialize connection using SDK key (note: using underscore (_) notation to denote alias to 500px)
  _500px.init({
      sdk_key: ''
  });

// when login is clicked, bring user to 500px for authentication
  $('#login').click(function () {
      _500px.login();
  });

// when login is successful, alert user of success
  _500px.on('authorization_obtained', function () {
// alert('You have logged in');
    // hide login container div
    $( '.sign-in-view' ).hide();
    // unhide this div
    $( '.image-results-view' ).show();

    //  Unsuccessful bonus attempt -- feedback welcome! :)
    // _500px.api('/users', function (response) {
    //   if (response.success === false) {
    //      console.log(response.error_message);
    //    }
    //   else {
    //     console.log(response.data);
    //   }
    //  });

    if (navigator.geolocation) {
      // capture geolocation data and store in 'position' parameter of function
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log('lat: ' + lat);
        console.log('long: ' + long);
        // set radius, conforming to 500px API specs for formatting
        var radius = '10mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          sort: 'rating',
          rpp: '28'
        };
        // SDK object plus api method, called with arguments for (1) endpoint, (2) search args, and (3) response function
        _500px.api('/photos/search', searchOptions, function (response) {
          if (response.success === false){
            console.log(response.error_message);
          }
          else {
            var photos = response.data.photos;
            photos.forEach(function (photo) {
              var photoSource = photo.image_url
              // create a new img element with src = photoSource
              var viewableImage = document.createElement('img');
              viewableImage.setAttribute('src', photoSource);
              // append the element to the div with class = images
              var imagesContainer = document.querySelector('.images');
              imagesContainer.appendChild(viewableImage);
            })
          }
        });
      });
    }
  });
});
