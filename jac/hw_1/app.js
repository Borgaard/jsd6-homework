/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/

// declare a loop that counts down from 99 to 1
for (i = 99; i > 1; i--) {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
}

for (i = 1; i > 0; i--) {
  console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, no bottles of beer on the wall.");
}

for (i = 0; i > -1; i--) {
  console.log("No bottles of beer on the wall, no bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}
