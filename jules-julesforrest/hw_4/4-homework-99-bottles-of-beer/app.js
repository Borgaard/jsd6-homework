/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/


var beerNumber;

var createLyric = function(lyric) {
  var lyricList = document.getElementById("lyric-list")
  var lyricListItem = document.createElement("li");
  var lyricText = document.createTextNode(lyric);
  lyricListItem.appendChild(lyricText);
  lyricList.appendChild(lyricListItem);
};

window.onload = function() {
  for (beerNumber = 99; beerNumber > -1; beerNumber--) {
    if (beerNumber > 2) {
      createLyric(beerNumber + " bottles of beer on the wall, " + beerNumber + " bottles of beer" + "\n" + "Take one down and pass it around, " + (beerNumber - 1) + " bottles of beers on the wall.");
    }
    else if (beerNumber === 2) {
      createLyric(beerNumber + " bottles of beer on the wall, " + beerNumber + " bottle of beers" + "\n" + "Take one down and pass it around, " + (beerNumber - 1) + " bottle of beer on the wall.");
    }
    else if (beerNumber === 1) {
      createLyric(beerNumber + " bottle of beer on the wall, " + beerNumber + " bottle of beer" + "\n" + "Take one down and pass it around, no more bottles of beer on the wall.");
    }
    else {
      createLyric("No more bottles of beer on the wall, no more bottles of beer." + "\n" + "Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
  }
}
