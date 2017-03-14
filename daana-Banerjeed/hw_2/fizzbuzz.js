
// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

// Follow the steps below.

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.
/*
for (var number = 1; number <=100; number++) {
    console.log(number);
}

// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.

if (number % 3 == 0) {
    console.log("fizz");
}

// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.

else if (number % 5 == 0) {
    console.log("buzz");
}

// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.

else if ((number % 3 == 0) && (number % 5 == 0)) {
    console.log("fizzbuzz");
}
*/

for (var number = 1; number <=100; number++) {
    var loop = "";
    if (number % 3 == 0) 
    loop += "fizz";
    
    else if (number % 5 == 0) 
    loop += "buzz";

    else if ((number % 3 == 0) && (number % 5 == 0)) 
    loop += "fizzbuzz";
    
    console.log(loop || number);
}

//OR - I tried using the ternary operator below:


for(var x=1;x<101;x++)document.write((((x%3?'':'fizz')+(x%5?'':'buzz'))||x)+'<br>');