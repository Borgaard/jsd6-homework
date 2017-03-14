var myHouse = {};

var myMotorcycle = {
  wheels: 2,
  color: "blue",
  maxSpeed: 150,
  owners: ["Terrence", "Mei-Yang"]
};

myHouse.windows = 6;
myHouse.address = "1 Main St";

var myCar = {};

myCar["doors"] = 2;
myCar["num-of-doors"] = 4;

myCar.accelerate = function(speed) {
  console.log("Accelerating to " + speed);
}
