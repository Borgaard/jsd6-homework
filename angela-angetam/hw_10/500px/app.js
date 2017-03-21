$(function() {
  // this sets up a connection with 500px similar to how jquery uses $ to id itself
  
  _500px.init({
    sdk_key: '159ef5ed3e3f0a94f3e9af3066f9a5589a5db0a6'
  });
  // this goes through the first 4 steps of OAuth: token request, login prompt to user, login credentials back to web service auth server, and then it sends response with token back to our app (.____.)b
  $("#login").click(function(){
    _500px.login();
  });
  function appendImg(pics) {
    $.each(pics, function(i){
              var $newImg = $("<img>").attr("src", pics[i].image_url);
              $newImg.addClass("image");
              $(".images").append($newImg);
            }); 
  }
  // when auth comes in, this fx runs. note: this is a callback fx
  _500px.on("authorization_obtained", function(){ 
    $(".sign-in-view").hide();
    $(".image-results-view").show();
    _500px.api("/users", function(response){
        $("header").append(response.data.user.username);
    });
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log("lat: " + lat);
        console.log("long: " + long);
        var radius = "10mi";
        var searchOptions = {
          geo: lat + "," + long + "," + radius,
          only: "Landscapes", 
          sort: "highest_rating", 
          rpp: 28
        }
        _500px.api("/photos/search", searchOptions, function(response){
          if(response.data.photos.length === 0) {
            console.log("No photos found")
          } else {
            // For hw need to replace this console log with get the photos and append them to the div.images. Create img element, and plug in the URL 500px gives you. Need to add class image 
            // can select an obj and run $.each on it
            console.log("There are " + response.data.photos.length + " photos.");
            var $photos = response.data.photos;
            appendImg($photos);
          }
        })
      });
    } else {
      $(".images").append("Sorry, this browser does not support geolocation");
    }
  });
});
