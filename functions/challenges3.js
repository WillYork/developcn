//Challenge 10 -  Create a function that takes two numbers and an operator as parameters. It should return a print out of the sum   
//e.g. “1 + 2 = 3” or “4 x 6 = 24”.

const c10 = (num1, num2, operator) => {
    if (operator == "*"){
        answer = num1 * num2
    } else if (operator == "-"){
        answer = num1 - num2
    } else if (operator == "/"){
        answer = num1 / num2
    } else if (operator == "+"){
        answer = num1 + num2
    } else {
        return false
    }
    console.log(`${num1} ${operator} ${num2} = ${answer}`)
}

c10(4, 5, "*")