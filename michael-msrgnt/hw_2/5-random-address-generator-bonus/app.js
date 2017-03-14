var numby = Math.ceil(Math.random() * 50000);
var street = ["Poppy Street", "Elm Avenue", "Poop View"];
var city = ["Funk City", "Poop Town", "Los Angeles"];
var state = ["CA", "NY", "MI", "XX"];
var zippy = ["90210", "11111", "21242", "39402"];

var randStr = Math.floor(Math.random() * street.length);
var randyCi = Math.floor(Math.random() * city.length);
var randySt = Math.floor(Math.random() * state.length);
var randyZ = Math.floor(Math.random() * state.length);

console.log(numby + " " + street[randStr] + ", " + city[randyCi] + " " + state[randySt] + ", " + zippy[randyZ]);
