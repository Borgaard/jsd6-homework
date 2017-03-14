var $lyricsUl = $('#lyrics');

for (var number = 99; number >= 0; number--) {
   if (number > 2) {
    var $lyricsLine = $('<li>').html(number + " " + "bottles of beer on the wall," + " " + number + " " + "bottles of beer.\nTake one down and pass it around," + " " + (number - 1) + " " + "bottles of beer on the wall.");
    $lyricsUl.append($lyricsLine);
   } else if (number === 2) {
    var $lyricsLine = $('<li>').html(number + " " + "bottles of beer on the wall," + " " + number + " " +"bottles of beer.\nTake one down and pass it around," + " " + (number - 1) + " " + "bottle of beer on thewall.");
    $lyricsUl.append($lyricsLine);
   } else if (number === 1) {
    var $lyricsLine = $('<li>').html(number + " " + "bottle of beer on the wall," + " " + number + " " + "bottle of beer.\nTake one down and pass it around, zero bottles of beer on the wall.");
    $lyricsUl.append($lyricsLine);
   } else {
    var $lyricsLine = $('<li>').html("No more bottles of beer on the wall, no more bottles of beer.\nGoto the store any buy some more, 99 bottles of beer on the wall.");
    $lyricsUl.append($lyricsLine);
   }
};
