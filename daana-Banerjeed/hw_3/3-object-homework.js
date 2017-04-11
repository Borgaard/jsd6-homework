/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

  //'Birthday Calendar'
  // Description: App that keeps track of birthdays
  // Every 'Birthday Calendar' has
  // - date
  // - name of person
  // - age of person
  // Every 'Birthday Calendar' can
  // - list days of the week
  // - show date by number and/or month
  // - show your friends/family member's names

  //'Class Assignments Calendar'
  // Description: App can show/remind user of upcoming assignments for class 
  // Every 'Class Assignments Calendar' has
  // - class names
  // - assignments names
  // - assignment due dates
  // Every 'Class Assignments Calendar' can
  // - list out all assignments for the week
  // - keep track of completed assignments
  // - prioritize assignments by completion date

  // 'Health/Fitness Activity Calendar'
  // Description: App wil be able to track user's health/Fitness
  // Every 'Health/Fitness Activity Calendar' has
  // - gender of user
  // - age of user
  // - weight of user
  // Every 'Health/Fitness Activity Calendar' can
  // - track how much physical activity the user is completing
  // - measure user's progress to goal
  // - track user steps each day

// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

var pet_owner;

// Answer Starts Here
var pet_owner = {
  name: "Joe",
  address: "123 First Street"
}

var pet_owner = {
 name: 'bob',
 address: '123 Main St, San Francisco, CA 94104'
 }
// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

var some_pet;

// Answer Starts Here

var some_pet = {
  name: "London",
  species: "Canine",
  breed: "Husky",
  noise: "Bark"
}

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
