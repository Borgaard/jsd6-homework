function countBottles(number) {
  return (number == 1) ? " bottle " : " bottles ";
}

function appendLyric(number) {
  var $lyrics = $('#lyrics');
  var $newLyricLi = $("<li>").text(number + countBottles(number) + " of beer on the wall, " + number + countBottles(number) + " of beer. Take one down, pass it around, " + (number - 1) + countBottles(number - 1) + " of beer on the wall.");

  $lyrics.append($newLyricLi);
}

for (var i = 99; i > 0; i--) {
  appendLyric(i);
}
