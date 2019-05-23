let balance = 12000;
let pin = 1234;
let cashChoice = false
const checkPin = (pinNumber) => {
    if (pinNumber == pin) {
        console.log("Thank you. You have entered the correct PIN")
        console.log("Would you like to withdraw cash, check your balance or exit?")
        pin = true
    } else {
        console.log("You have entered the incorrect PIN. Please take your card.")
    }
}

const cashOrBalance = (choice) => {
    if (pin === true && choice == "cash") {
        console.log("Please enter how much you would like to withdraw")
        cashChoice = true
    } else if (pin === true && choice == "balance") {
        console.log(`Your balance is £${balance}.`)
    } else if (pin === true && choice == "exit") {
        console.log("Please take your card.")
    }
}

const withdrawCash = (cash) => {
    if (cashChoice === true && balance >= cash) {
        balance = balance - cash
        console.log(`You have withdrawn £${cash}. Your remaining balance is £${balance}`);
    } else if (cashChoice === true && balance < cash) {
        console.log("You do not have enough in your account.");
    }
}

checkPin(1234)
cashOrBalance("cash")
withdrawCash(1200)
