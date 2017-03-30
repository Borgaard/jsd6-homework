/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string  to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

let lyrics = document.getElementById("lyrics");
let lyricsNodes = document.createElement("ul");

// Iterate starting from 99 bottles to no more bottles on the wall
window.onload = function() {
	for (var i = 99; i >= 0; i--) {
		let preDrink;
		let postDrink;
		
		if (i > 1) {
			preDrink = i + " bottles of beer on the wall, " + i + " bottles of beer. \t"; 
			postDrink = "Take one down and pass it around, "+ (i-1) + " bottles of beer on the wall.";
		} 
		else if (i === 1) {
			preDrink = i + " bottle of beer on the wall, " + i + " bottle of beer. "; 
			postDrink = "Take one down and pass it around, no more bottles of beer on the wall.";
		} 
		else if (i === 0) {
			preDrink = "No more bottles of beer on the wall, no more bottles of beer. "; 
			postDrink = "Go to the store and buy some more, 99 bottles of beer on the wall.";		
		}  
		
		let lyricLine = document.createElement("li");
		lyricLine.appendChild(document.createTextNode(preDrink));
		lyricLine.appendChild(document.createElement("br"));
		lyricLine.appendChild(document.createTextNode(postDrink));
		
		lyricsNodes.appendChild(lyricLine);
		lyricsNodes.appendChild(document.createElement("br"));
	}

	lyrics.appendChild(lyricsNodes);
}