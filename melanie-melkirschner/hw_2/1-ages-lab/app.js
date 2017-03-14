/*
    When programming user interfaces, you will often need to display results based on a certain input. In this exercise, help the students design
    a program that will let users know what legal privileges U.S. citizens enjoy based on their age.

    Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. 
    See the conditions below:

    - If you are under 16, you cannot do much outside of going to school
    - If you are 16 or older, you can drive
    - If you 18 or older, you can vote
    - If you are 21 or older, you can drink alcohol
    - If you are 25 or older, you can rent a car
    - If you are 35 or older, you can run for president
    - If you are 62 or older, you collect social security benefits

    The results that your program provides should be only the most recent privilege based on the provided age.
*/

var howOld = function(number) {
    var age = number;

    if (age >= 62) {
        console.log("You can collect social security benefits, stay alive");
    } else if (age >= 35){
        console.log("You can take over for Trump");

    } else if (age >= 25) {
        console.log("You can rent a car");
    } else if (age >=21) {
               console.log("Relax, drink a beer");
    } else if (age >=18) {
                console.log("Wahooooo You can vote");
    } else if (age>=16) {
        console.log("You can drive, be careful!");

    } else {
        console.log("You cant do anything fun");
    }

};

howOld(37);



