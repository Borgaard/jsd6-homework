var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Lyft'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Dogs', 'Peaches', 'Poopy Pants'];

var buttonC = document.querySelector("#create");
buttonC.addEventListener("click", createz);
function createz() {
  var newP = document.createElement("p");
  var randX = startupX[Math.floor(Math.random() * startupX.length)];
  var randY = startupY[Math.floor(Math.random() * startupY.length)];
  var newXY = "A startup that is " +  randX + " but for " + randY;
  var grabbed = document.querySelector("#xForY");
  grabbed.textContent = newXY;

}

var buttonS = document.querySelector("#save");
buttonS.addEventListener("click", savez);
var saved = [];
function savez() {
  var current = document.querySelector("h1").textContent;
  saved.push(current);
  console.log(saved);
}

var buttonP = document.querySelector("#print");
buttonP.addEventListener("click", printz);
function printz() {
  var grabbed = document.querySelector("#favorites");
  for (var i = 0; i < saved.length; i++) {
    var newP = document.createElement("p");
    grabbed.appendChild(newP);
    newP.textContent = saved[i];
    console.log(saved[i]);
  }

  console.log(saved);
}
