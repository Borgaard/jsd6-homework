/*

Creating a page where every time the page is loaded, the console logs random values for two dice.

1) Write down pseudocode for the program described below.
create two variables, each does:
generate a random number * 6
use floor or ceiling to round

console.log both values
call the function upon page load

2) Follow the steps in your pseudocode to write the code for your function.
* generate a random number between 1 - 6 and store to a variable, firstDie
* generate a random number between 1 - 6 and store to a variable, secondDie
* log the values of the first and second dice to the console, labeling each value
* log the total of the two dice to the console, with a label

3) Create a statement that runs the function you created whenever the page loads.
  (Hint: Reference when the page loads with the code window.onload, and set its value to the name of the function you created, without parentheses.)

*/

function roll(){
  var firstDie = Math.ceil(Math.random()*6);
  var secondDie = Math.ceil(Math.random()*6);
  console.log("Your first die was a " + firstDie + " and your second die was a " + secondDie + ".");
  console.log("This makes a total of " + (firstDie + secondDie) + ". Nice roll!");
}
window.onload = roll;
