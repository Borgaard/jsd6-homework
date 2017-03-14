/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

window.onload = randomAddress;
 
var streetNumber = ["1389", "5599", "2257", "1250", "4538"]
var streetName = ["Amador Village Circle", "Huntcrest Drive", "Jefferson Street", "Fern Creek Drive"]
var cityName = ["Oakland", "Chicago", "Los Angeles", "Atlanta"]
var stateName = ["GA", "IL", "CA", "NV"]
var zipCode = ["94612", "60661", "30332"]
 
function randomAddress() {
    console.log(
        streetNumber[Math.floor(Math.random() * streetNumber.length)] + " " +
        streetName[Math.floor(Math.random() * streetName.length)] + ", " +
        cityName[Math.floor(Math.random() * cityName.length)] + " " +
        stateName[Math.floor(Math.random() * stateName.length)] + ", " +
        zipCode[Math.floor(Math.random() * zipCode.length)]
        );
 
}