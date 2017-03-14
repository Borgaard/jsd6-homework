/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/
var streetNumber =[121,234,595,98,09,18,38,94,09];
var streetName = ["First Ave", "Elm St", "Sycamore St", "Crescent Blvd", "Market St"];
var cityName =["San Francisco", "Santa Domingo", "Burtley", "Queens", "Atlantic", "Alberta"];
var stateName =["CA", "NY", "OR", "WA", "AZ", "MA"];
var zipCode =[92819, 84756, 93019, 84757, 20123, 90948];

var randomAddress = streetNumber[Math.floor(Math.random() * streetNumber.length)]+ " " +streetName[Math.floor(Math.random() * streetName.length)]+ " " +cityName[Math.floor(Math.random() * cityName.length)]+ " " +stateName[Math.floor(Math.random() * stateName.length)]+ " "+zipCode[Math.floor(Math.random() * zipCode.length)];

console.log(randomAddress);