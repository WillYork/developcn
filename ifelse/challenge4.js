//Method 1
let num = 42244
let rem, temp, final = 0
temp = num
while(num>0) {
    rem = num%10;
    num = Math.floor(num/10);
    final = final*10+rem;
}
if (final == temp) {
    console.log("The number is palindromic")
} else {
    console.log("The number is not palindromic")
}

//Method 2
let number = 20003
let strNumber = number.toString()
let arrayNumber = strNumber.split("")
let revNumber = arrayNumber.reverse()
let revstrNumber = revNumber.toString()
let newNumber = revstrNumber.replace(/\,/g,"")
console.log(`Number: ${number} -- Reversed Number: ${newNumber}`)

if (number == newNumber) {
    console.log("The number is palindromic")
} else {
    console.log("The number is not palindromic")
}
