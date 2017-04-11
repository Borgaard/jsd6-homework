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

var personModule = (function (name, age) {
  var name = name;
  var age = age;
  var kids = [];

  return {  
    getKids: function() {
      return kids;
    },
    addKids: function(kidName) {
      kids.push(kidName);
    },
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    celebrateBirthday: function() {
      age += 1;
      console.log("Happy Birthday! " + name + " is now " + age);
    }
  };
})('Bill', 70);

personModule.addKids("Fox");
personModule.addKids("Samantha");

console.log(personModule.getKids());
console.log(personModule.getName());
console.log(personModule.getAge());
personModule.celebrateBirthday();
