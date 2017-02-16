/*

Creating a page where every time the page is loaded, the console logs random values for two dice. 

1) Write down pseudocode for the program described below.

2) Follow the steps in your pseudocode to write the code for your function.
* generate a random number between 1 - 6 and store to a variable, firstDie
* generate a random number between 1 - 6 and store to a variable, secondDie
* log the values of the first and second dice to the console, labeling each value
* log the total of the two dice to the console, with a label

3) Create a statement that runs the function you created whenever the page loads.
  (Hint: Reference when the page loads with the code window.onload, and set its value to the name of the function you created, without parentheses.)

*/

function snakeEyes() {
	var firstDie = Math.ceil(Math.random()*6);
	var secondDie = Math.ceil(Math.random()*6);
	var sum = firstDie + secondDie;

    var div = document.getElementById("textDiv");

    div.innerHTML = "<b> First die result: </b>" + firstDie + "<br>"
    				+ "<b> Second die result: </b>" + secondDie + "<br>"
    				+ "<b> Sum of results: </b>" + sum;
}

window.onload = snakeEyes;





