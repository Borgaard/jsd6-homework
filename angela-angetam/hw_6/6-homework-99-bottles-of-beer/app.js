var ul = document.getElementById("lyrics");
for (var i=99; i>=0; i--) {
  var newLine = document.createElement("li");
  if (i>1) {
     var text = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer. \n Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.")
  } else if (i===1) {
    var text = document.createTextNode(i + " bottle of beer on the wall, " + i + " bottle of beer. \n Take one down and pass it around, no more bottles of beer on the wall.");
  } else {
    var text = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
  newLine.appendChild(text);
  ul.appendChild(newLine);
}; 
