let balance = 12000;
let pin = 1234;
const withdrawCash = (pinNumber, cash) => {
    if (pinNumber == pin) {
        console.log("Thank you. You entered the correct PIN.");
        if (balance >= cash) {
            balance = balance - cash
            console.log(`You have withdrawn £${cash}. Your remaining balance is £${balance}`);
        } else {
            console.log("You do not have enough in your account.");
        }
    } else {
        console.log("You have entered the incorrect PIN. Please try again.");
    }
}

withdrawCash(1234, 300)