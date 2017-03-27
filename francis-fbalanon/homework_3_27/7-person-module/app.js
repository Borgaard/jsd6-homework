/*
	Build a module that creates a person by completing the following steps:
	1. Create a function (using a function statement) that does the following:
		- Accepts two parameters, for the person's name and their age
		- Declares a variable named 'kids', which is an empty array
		- Returns an object with the following methods:
			- a method get the list of kids
			- a method to have a new kid
			- a method to get the person's name
			- a method to get the person's age
			- a method to celebrate the person's birthday (make then a year older)
	2. Convert the function to an IIFE, being sure to pass arguments for the parameters
	3. Write statements that test all of your module's methods and verify that they all work as expected.
*/

var personModule = (function(name, age) {
    var kids = [];
    return {
		getList: function () {
			if (kids.length === 0) {
				console.log("Sorry, I don't have any kids!");
			} else if (kids.length === 1) {
				console.log("My child's name is " + kids + "!");
			} else {
				console.log(kids + " are my children's names!");
			}
		},
        newKid: function(kid) {
			kids.push(kid);
			console.log("I have a new child named " + kid + "!");
        },
        getName: function() {
			console.log("My name is " + name + ".");
        },
		getAge: function () {
			console.log("I am " + age + " years old.");
		},
		celebrateBirthday: function() {
			age = age + 1;
			console.log("It's my birthday, I just turned " + age + "!");
		}
    };
})('Jeffrey Arnold', 28);

personModule.getName();
personModule.getAge();
personModule.getList();
personModule.celebrateBirthday();
personModule.newKid("Sarah");
personModule.getList();
personModule.celebrateBirthday();
personModule.newKid("Mark");
personModule.getList();