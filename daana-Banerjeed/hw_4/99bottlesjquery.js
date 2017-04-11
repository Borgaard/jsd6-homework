var song = $('#allLyrics');

var line1 = " bottles of beer on the wall, ";
var line2 = " bottles of beer. ";
var line3 = " Take one down, pass it around, ";
var line4 = " bottles of beer on the wall. ";
var line5 = "No more";
var line6 = "Go to the store and buy some more, 99"


var singular1 = " bottle of beer on the wall, ";
var singular2 = " bottle of beer.";




for(var i = 99; i >= 0; i--) {
	if (i==2) {
		var newLi = $('<li>');
		newLi.text(i + line1 + i + line2 + line3 + (i - 1) + singular1);
		song.append(newLi);
	}
	else if (i > 2) {
		var newLi = $('<li>');
		newLi.text(i + line1 + i + line2 + line3 + (i - 1) + line4);
		song.append(newLi);
	} else if (i==0) {
		var newLi = $('<li>');
		newLi.text(line5 + line1 + line5 + line2 + line6 + line4);
		song.append(newLi);
	} else {
		var newLi = $('<li>');
	 	newLi.text(i + singular1 + i + singular2 + line3 + line5 + line4);
		song.append(newLi);
	}

}
