var a = " bottles of beer on the wall, ";
var b = " bottles of beer. Take one down and pass it around, ";
var c = " bottles of beer on the wall.";
var d = "1 bottle of beer on the wall.";
var e = " bottle of beer on the wall, ";
var f = " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."
var g = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";

window.onload = function() {
    for (var i = 98; i >= 0; i--) {
        if (i > 2) {
            var inputLyrics = i + a + i + b + (i - 1) + c;
            var createLi = document.createElement("li");
            var inputText = document.createTextNode(inputLyrics);
    
            createLi.appendChild(inputText);
            document.getElementById("lyrics").appendChild(createLi);
        } else if (i === 2) {
            var inputLyrics = i + a + i + b + d;
            var createLi = document.createElement("li");
            var inputText = document.createTextNode(inputLyrics);
    
            createLi.appendChild(inputText);
            document.getElementById("lyrics").appendChild(createLi); 
        } else if (i === 1){
            var inputLyrics = i + e + i + f;
            var createLi = document.createElement("li");
            var inputText = document.createTextNode(inputLyrics);
    
            createLi.appendChild(inputText);
            document.getElementById("lyrics").appendChild(createLi); 
        } else {
            var inputLyrics = g;
            var createLi = document.createElement("li");
            var inputText = document.createTextNode(inputLyrics);
    
            createLi.appendChild(inputText);
            document.getElementById("lyrics").appendChild(createLi); 
        }
    }
};
