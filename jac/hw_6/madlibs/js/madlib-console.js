// pick out buttons by ID
createButton = document.querySelector('#create');
favoriteButton = document.querySelector('#save');
printButton = document.querySelector('#print');

// pick out text blocks by ID
var ideaBlock = document.querySelector('#xForY');
var favBlock = document.querySelector('#favorites');

// add event listener to 'create' button and replace text if button has already been click
createButton.addEventListener('click', function() {
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));
var newIdea = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '. ');
var newIdeaNode = document.createTextNode(newIdea);

if (ideaBlock.hasChildNodes()) {
  var oldIdeaChild = ideaBlock.firstChild;
  return ideaBlock.replaceChild(newIdeaNode, oldIdeaChild);
  }
else {
  return ideaBlock.appendChild(newIdeaNode);
  }
});

// add event listener to 'favorite' button to add idea to array when clicked
favoriteButton.addEventListener('click', function() {
  var newFavIdea = ideaBlock.firstChild;
  favBlock.appendChild(newFavIdea);
});
