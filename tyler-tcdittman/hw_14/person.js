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

var createPerson = (function (name, age){
  var kids = [];
  return {
    getKidList: function(){
      console.log("This person has the following kids: " + kids.join());
    },
    haveKid: function(newKidName){
      kids.push(newKidName);
      console.log("Just had a new kid! His/her name is " + newKidName);
    },
    getPersonName: function(){
      console.log("This person's name is " + name);
    },
    getPersonAge: function(){
      console.log("This person's age is " + age);
    },
    celebrate: function(){
      age++;
      console.log("Happy birthday. This person's age is now " + age)
    }
  };
})("Joe Smith", 34);

createPerson.getPersonName();
createPerson.getPersonAge();
createPerson.celebrate();
createPerson.celebrate();
createPerson.getKidList();
createPerson.haveKid("Billy");
createPerson.getKidList();
createPerson.haveKid("Sarah");
createPerson.getKidList();
