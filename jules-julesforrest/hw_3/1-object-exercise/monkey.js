/* Work with a partner to create objects for three different monkeys (called monkey1, monkey2, monkey3), each with the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(food)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Choose which partner will initially take the pair programming role of driver and who will be the observer.
Switch roles after creating the first object, then again after creating the second.
Also be sure each partner takes a turn in each role during the exercise steps below.

Exercise your monkeys by retrieving their properties and using their methods.
Practice using both syntaxes for retrieving properties (dot notation and brackets).

*/

var monkey1 = {
  name: "Alice",
  species: "mandrill",
  foodsEaten: ["Orange", "Banana"],
  eatSomething: function(food) {
    this.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is " + this.name + ", I am a " + this.species + " monkey and I have eaten " + this.foodsEaten);
  }
};

var monkey2 = {
  name: "Bob",
  species: "black howler",
  foodsEaten: ["Orange", "Banana"],
  eatSomething: function(food) {
    this.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is " + this.name + ", I am a " + this.species + " monkey and I have eaten " + this.foodsEaten);
  }
};

var monkey3 = {
  name: "Carol",
  species: "gelada",
  foodsEaten: ["Orange", "Banana"],
  eatSomething: function(food) {
    this.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is " + this.name + ", I am a " + this.species + " monkey and I have eaten " + this.foodsEaten);
  }
};
