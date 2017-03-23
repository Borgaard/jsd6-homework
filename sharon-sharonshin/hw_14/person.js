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

var person = (function(name,age){
	var kids = [];

	return{
		getList: function(){
			return kids;
		},

		newKid: function(kidName){
			kids.push(kidName);
		},

		getName: function(){
			return name;
		},

		getAge: function(){
			return age;
		},

		birthday: function(){
			return age+1;
		}
	}
})("aiden", 1);

console.log(person.getName()); // returns aiden
console.log(person.getAge()); // returns 1
console.log(person.birthday()); // returns 2
console.log(person.newKid("jennifer")); // adds mary to list of kids
console.log(person.getList()); // returns jennifer
console.log(person.newKid("john")); // adds mary to list of kids
console.log(person.getList()); // returns jennifer & john

/*  Questions

1. Is it ok that the new kid function returns undefined? 
2. My functions are working but is this the "module" way? Just wanted to be sure. 
3. Is it OK that age just adds 1 to the age passed in parameter? Or does it keep need to be incrementing by 1 each time? 

*/