var bottleNum = 99;
var button = document.querySelector("button");
button.addEventListener("click", displayz);
function displayz() {
  for (bottleNum = 99; bottleNum > 0; bottleNum) {

    if (bottleNum > 2) {
    var newGuyA = document.createElement("li");
    var bottleA = bottleNum + " bottles of beer on the wall, " + bottleNum + " bottles of beer. Take one down and pass it around, " + --bottleNum + " bottles of beer on the wall."

    newGuyA.textContent = bottleA;
    document.body.appendChild(newGuyA);
    }

    if (bottleNum === 2) {
      var newGuyB = document.createElement("li");
      var bottleB = bottleNum + " bottles of beer on the wall, " + bottleNum + " bottles of beer. Take one down and pass it around, " + --bottleNum + " bottle of beer on the wall."

      newGuyB.textContent = bottleB;
      document.body.appendChild(newGuyB);

    }

    if (bottleNum === 1) {
      var newGuyC = document.createElement("li");
      var bottleC = (bottleNum + " bottle of beer on the wall, " + bottleNum + " bottle of beer. Take one down and pass it around, " + --bottleNum + " bottles of beer on the wall.");

      newGuyC.textContent = bottleC;
      document.body.appendChild(newGuyC);
    }
  }
}
