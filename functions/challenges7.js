//Challenge 18 - Create a function that takes a number between 0 and 100 and returns a grade based on this system 
//"A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%.

const grade = (num) => {
    if (num > 100 || num <0) {
        console.log("Number entered is invaled - try again, idiot.")
    } else if (num <= 100 && num >= 90) {
        console.log("Nice one! You got a grade A. What a nerd!")
    } else if (num <= 89 && num >= 80) {
        console.log("Not bad, you got a grade B... could do better.")
    } else if (num <= 79 && num >= 70) {
        console.log("Grade C. Super average. Well done, I guess.")
    } else if (num <= 69 && num >= 60) {
        console.log("You got a grade D. Go sit on the reject table with the other rejects.")
    } else {
        console.log("Big fat F for 'Failure'. What have you even been doing all year?")
    }
}

grade(213)