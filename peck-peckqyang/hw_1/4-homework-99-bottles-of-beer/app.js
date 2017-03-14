/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

var preDrink;
var postDrink;

// Iterate starting from 99 bottles to no more bottles on the wall
for (var i = 99; i >= 0; i--) {

	// Print lyric describing number of beer bottles on wall before 1 is taken down
	if (i > 1) {
		preDrink = i + " bottles of beer on the wall, " + i + " bottles of beer."; // plural
	} 
	else if (i === 1) {
		preDrink = i + " bottle of beer on the wall, " + i + " bottle of beer."; // singular

	} 
	else if (i === 0) {
		preDrink = "No more bottles of beer on the wall, no more bottles of beer."; 
	}  
	console.log(preDrink);

	// Print lyric describing number of beer bottles on wall after 1 is taken down
	if (i-1 > 1) {
		postDrink = "Take one down and pass it around, "+ (i-1) + " bottles of beer on the wall.\n";  //plural
	} 
	else if (i-1 === 1) {
		postDrink = "Take one down and pass it around, "+ (i-1) + " bottle of beer on the wall.\n"; //singular
	} 
	else if (i-1 === 0) {
		postDrink = "Take one down and pass it around, no more bottles of beer on the wall.\n";
	} 
	else {
		postDrink = "Go to the store and buy some more, 99 bottles of beer on the wall.";		
	}
	console.log(postDrink);
}