
	// Build a module that creates a person by completing the following steps:
	// 1. Create a function (using a function statement) that does the following:
	// 	- Accepts two parameters, for the person's name and their age
	// 	- Declares a variable named 'kids', which is an empty array
	// 	- Returns an object with the following methods:
	// 		- a method get the list of kids
	// 		- a method to have a new kid
	// 		- a method to get the person's name
	// 		- a method to get the person's age
	// 		- a method to celebrate the person's birthday (make then a year older)
	// 2. Convert the function to an IIFE, being sure to pass arguments for the parameters
	// 3. Write statements that test all of your module's methods and verify that they all work as expected.


	var mel = (function makePerson(name, age) {

	return {

		kids: [],
		name: name,
		age: age,

		getListOfKids: function() {
			return this.kids;
		},
		newKid: function(nameofKid) {
			this.kids.push(nameofKid);
		},
		getTheName: function() {
			return this.name;
		},
		getTheAge: function() {
			return this.age;
		},
		ItsYourBirthday: function() {
			this.age += 1;
		}
	};
})("Mel Kirschner", 26);

console.log(mel.getTheName());
console.log(mel.getTheAge()); 
mel.ItsYourBirthday();
console.log(mel.getTheAge()); 
console.log(mel.getListOfKids()) 

mel.newKid('Tyler');
mel.newKid('Tammy');

console.log(mel.getListOfKids()) 


