//Challenge 15 - Create a function that takes two numbers as a parameters and returns the larger of the two numbers.
const whichIsLarger = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(whichIsLarger(14322,212))

//Challenge 16 - Create a function that takes a number as a parameter and checks if it is even.
const isItEven = (num) => {
    if (num%2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isItEven(5))

//Challenge 17 - Create a function that takes a number as a parameter and checks if it is odd.
const isItOdd = (num) => {
    if (num%2 !== 0) {
        return true
    } else {
        return false
    }
}
console.log(isItOdd(5))