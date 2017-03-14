/*

Creating a page where every time the page is loaded, the console logs random values for two dice. 

1) Write down pseudocode for the program described below.

    Create a variable called firstDie that generates a random number between 1 and 6
    Create a variable called secondDie that generates another random number between 1 and 6
    Print the value of the firstDie next to the words "First Die"
    Print the value of the secondDie next to the words "Second Die"
    Print the value of the total of the firstDie and the secondDie next to the words "Total"
    Have this program run once the page loads.
 

2) Follow the steps in your pseudocode to write the code for your function.
* generate a random number between 1 - 6 and store to a variable, firstDie
* generate a random number between 1 - 6 and store to a variable, secondDie
* log the values of the first and second dice to the console, labeling each value
* log the total of the two dice to the console, with a label

3) Create a statement that runs the function you created whenever the page loads.
  (Hint: Reference when the page loads with the code window.onload, and set its value to the name of the function you created, without parentheses.)

*/

window.onload = dice;
 
function dice() {
    var firstDie = Math.ceil(Math.random() * 6);
    console.log("First Die: " + firstDie)
 
    var secondDie = Math.ceil(Math.random() * 6);
    console.log("Second Die: " + secondDie)
 
    var total = firstDie + secondDie
    console.log("Total: " + total)
 
}