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
// Description: The event that gets stored in a calendar
// Every 'car' has
// - a start date/time
// - a end date/time
// - a list of attendees
// - a location
// Every 'event' can
// - add attendees
// - add a location
// - send a notification

// 'User'
// Description: A potential atendee of calendar events.
// Every 'user' has
// - a name
// - a photo
// - a email address
// Every 'user' can
// - send invitations
// - accept invitations
// - opt opt of notifications

// 'Conference room'
// Description: A potential location for calendar events.
// Every 'location' has
// - a building and floor number
// - a max capacity
// - AV capabilities
// Every 'conference room' can
// - accept meeting invitations
// - become unavailable

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
  name: "Bob Smith"
  address: "123 Main Street"
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
  name: "Smokey",
  species: "cat",
  breed: "tabby",
  noise: "meow",
  makeNoise: function(noise){console.log(noise)}
}
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
