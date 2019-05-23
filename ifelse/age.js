//This code checks the age of the customer and returns a string depending on whether they are
//over the legal drinking age.
let age = 23;
let country = "UK";
if (country != "UK") {
    console.log("You must be in the UK.")
} else if (age < 18 && country == "UK") {
    console.log("You aren't old enough.");
} else if (age <= 25 && country == "UK") {
    console.log("I will need to see your ID.");
} else if (age > 25 && country == "UK") {
    console.log("Yes I can serve you.");
} else {
    console.log("You have not entered an age.");
}