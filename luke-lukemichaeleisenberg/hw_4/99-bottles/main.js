function countBottles(number) {
  return (number == 1) ? " bottle " : " bottles ";
}

function appendLyric(number) {
  var lyrics = document.getElementById('lyrics');
  var newLyricLi = document.createElement("li");
  var lyricText = document.createTextNode(number + countBottles(number) + " of beer on the wall, " + number + countBottles(number) + " of beer. Take one down, pass it around, " + (number - 1) + countBottles(number - 1) + " of beer on the wall.");

  newLyricLi.appendChild(lyricText);
  lyrics.appendChild(newLyricLi);
}

for (var i = 99; i > 0; i--) {
  appendLyric(i);
}
