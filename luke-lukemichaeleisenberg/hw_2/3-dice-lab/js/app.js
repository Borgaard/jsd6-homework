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

//create a function declaration
//use the random() function to get the numbers and store them to variables
//log out the values
//add the values together
//log out the total
//call the function when the window loads

function rollDice()
{
  die1 = Math.floor(Math.random() * 6);
  die2 = Math.floor(Math.random() * 6);
  console.log("The first die is " + die1);
  console.log("The second die is " + die2);
  total = die1 + die2
  console.log("The total roll is " + total);
}

window.onload = rollDice;
