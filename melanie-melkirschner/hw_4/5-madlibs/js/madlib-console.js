//Your job is to add code to the JavaScript file that makes the "Create new startup" button work. Basically, when the user clicks that buttons, your JavaScript should generate a new madlib saying, which should appear inside the `XforY` h1.


var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupY = ['zebras', 'umbrellas', 'carrots', 'the news', 'menus', 'clocks', 'statues', 'coffins', 'propoganda', 'rugs', 'napkins'];

var createButton = document.getElementById('create');
var saveButton = document.getElementById('save');
var printButton = document.getElementById('print');
var addStartup = document.getElementById('xForY');
var favorites = document.getElementById('favorites');
var arrayFavorites = [];

createButton.onclick = function() {
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));
	var output = ('A startup that is like ' + startupX[random1] + ' but for ' + startupY[random2]);
	var outputNode = document.createTextNode(output);
	addStartup.appendChild(outputNode);

	saveButton.onclick = function(event) {
		event.preventDefault();
        arrayFavorites.push(addStartup.innerHTML);
		console.log(arrayFavorites);
     };

     printButton.onclick = function() {
     	for (var i = 0; i < arrayFavorites.length; i++) {
    	console.log(arrayFavorites[i]);
    	var newSection = document.createElement('p');
		var item = arrayFavorites[i];
		var arrayItemNode = document.createTextNode(item);
		favorites.appendChild(newSection);
		newSection.appendChild(arrayItemNode);
		}


	}
};

//this would be wayyyyy shorter with jquery. looked up .join method which should get the lines to break but I couldnt gt it to work





