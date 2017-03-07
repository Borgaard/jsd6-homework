var a = " bottles of beer on the wall, ";
var b = " bottles of beer. Take one down and pass it around, ";
var c = " bottles of beer on the wall.";
var d = "1 bottle of beer on the wall.";
var e = " bottle of beer on the wall, ";
var f = " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."
var g = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
var $lyrics = $("#lyrics");

$(function() { 
    for (var i = 98; i >= 0; i--) {
        if (i > 2) {
            var inputLyrics = i + a + i + b + (i - 1) + c;
            var createLi = $("<li>");
            createLi.text(inputLyrics);               
            $lyrics.append(createLi);

        } else if (i === 2) {
            var inputLyrics = i + a + i + b + d;
            var createLi = $("<li>");
            createLi.text(inputLyrics);
            $lyrics.append(createLi);

        } else if (i === 1){   
            var inputLyrics = i + e + i + f;
            var createLi = $("<li>");
            createLi.text(inputLyrics);
            $lyrics.append(createLi);
            
        } else {
            var inputLyrics = g;
            var createLi = $("<li>");
            createLi.text(inputLyrics);
            $lyrics.append(createLi);
        }
    }
});