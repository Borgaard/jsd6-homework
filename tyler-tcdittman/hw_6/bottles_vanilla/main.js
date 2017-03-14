
for (var number = 99; number >= 0; number--) {
   if (number > 2) {
    var lineElement = document.createElement("li");
    var lineText = document.createTextNode(number + " " + "bottles of beer on the wall," + " " + number + " " + "bottles of beer.\nTake one down and pass it around," + " " + (number - 1) + " " + "bottles of beer on the wall.");
    lineElement.appendChild(lineText);
    document.getElementById("lyrics").appendChild(lineElement);
   } else if (number === 2) {
    var lineElement = document.createElement("li");
    var lineText = document.createTextNode(number + " " + "bottles of beer on the wall," + " " + number + " " +"bottles of beer.\nTake one down and pass it around," + " " + (number - 1) + " " + "bottle of beer on thewall.");
    lineElement.appendChild(lineText);
    document.getElementById("lyrics").appendChild(lineElement);
   } else if (number === 1) {
    var lineElement = document.createElement("li");
    var lineText = document.createTextNode(number + " " + "bottle of beer on the wall," + " " + number + " " +"bottle of beer.\nTake one down and pass it around," + " " + (number - 1) + " " + "bottles of beer on thewall.");
    lineElement.appendChild(lineText);
    document.getElementById("lyrics").appendChild(lineElement);
   } else {
    var lineElement = document.createElement("li");
    var lineText = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer.\nGoto the store any buy some more, 99 bottles of beer on the wall.");
    lineElement.appendChild(lineText);
    document.getElementById("lyrics").appendChild(lineElement);
   }
};
