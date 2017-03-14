/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).


for (var bottleNum = 99; bottleNum > 0; bottleNum--) {
  console.log(bottleNum + " bottles of beer on the wall, " + bottleNum + " bottles of beer. Take one down and pass it around, " + bottleNum + " bottles of beer on the wall.");
}
*/

var bottleNum;

for (bottleNum = 99; bottleNum > 0; bottleNum) {
  console.log(bottleNum + " bottles of beer on the wall, " + bottleNum + " bottles of beer. Take one down and pass it around, " + --bottleNum + " bottles of beer on the wall.");

  if (bottleNum === 2) {
    console.log(bottleNum + " bottles of beer on the wall, " + bottleNum + " bottles of beer. Take one down and pass it around, " + --bottleNum + " bottle of beer on the wall.");
  }

  if (bottleNum === 1) {
    console.log(bottleNum + " bottle of beer on the wall, " + bottleNum + " bottle of beer. Take one down and pass it around, " + --bottleNum + " bottles of beer on the wall.");
  }
}
