//Method 2(simplified)
let number = 20002
let strNumber = number.toString()
let arrayNumber = strNumber.split("")
let revNumber = arrayNumber.reverse()
let newNumber = revNumber.join("")
console.log(`Number: ${number} -- Reversed Number: ${newNumber}`)

if (number == newNumber) {
    console.log("The number is palindromic")
} else {
    console.log("The number is not palindromic")
}