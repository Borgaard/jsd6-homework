/*

Creating a page where every time the page is loaded, the console logs random values for two dice. 

1) Write down pseudocode for the program described below.

when page is loaded

dice 1 = random number between 1-6
dice 2 = random number between 1-6

print dice 1
print dice 2

2) Follow the steps in your pseudocode to write the code for your function.
* generate a random number between 1 - 6 and store to a variable, firstDie
* generate a random number between 1 - 6 and store to a variable, secondDie
* log the values of the first and second dice to the console, labeling each value
* log the total of the two dice to the console, with a label

3) Create a statement that runs the function you created whenever the page loads.
  (Hint: Reference when the page loads with the code window.onload, and set its value to the name of the function you created, without parentheses.)

*/

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

var firstDie = randomIntFromInterval(1,6);
var secondDie = randomIntFromInterval(1,6);
var total = firstDie + secondDie;

function rollDice () {
	console.log("The first dice is " + firstDie);
	console.log("The second dice is " + secondDie);
	console.log("The total is " + total);
};

window.onload = rollDice;


