// Challenge 13 - Create a function that takes two numbers as a parameters and checks if they are equal.
const isItEqual = (num1, num2) => {
    if (num1 == num2){
        return true
    } else {
        return false
    }
}
console.log(isItEqual(5,4))

//Challenge 14 - Create a function that takes two numbers as a parameters and returns the smaller of the two numbers.
const whichIsSmaller = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else {
        return num2
    }
}
console.log(whichIsSmaller(142,212))