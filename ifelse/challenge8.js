//Create two variables called num1 and num2.
//Create an if statement that checks if the result of the
//sum is even. If it is return the number, otherwise return
//the numbers multiplied together.

let num1 = 313;
let num2 = 124;
let sum = num1+num2;
if (sum%2 === 0) {
    console.log(`${num1} plus ${num2} results in an even number.`);
} else {
    console.log(`The result of the addition is odd: ${sum}.`);
}