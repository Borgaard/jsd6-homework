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
  // 'Event'
  // Every 'event' has a 
  // - date 
  // - title 
  // - time 
  // Every 'event' can 
  // - send a reminder 
  // - be deleted 
  // - be moved 
  // 'Reminders'
  // Every 'reminder' has a 
  // - time 
  // - description 
  // Every 'reminder' can 
  // - alert you 
  // - be set to a specifc time (e.g. 30 mins before)
  // 'To Do List'
  // Every 'to do list' has a 
  // - text
  // - status (completed/in progress)
  // Every 'to do list' can 
  // - change status 
  // - send reminders 

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
  name: 'charlie',
  species: 'dog',
  breed: 'goldendoodle',
  noise: 'bark', 
  speak: function() {
    console.log(this.noise)
  }
}
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
