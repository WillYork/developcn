const person = {
    name: "William",
    age: 28,
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
    favBands: ["The Shins", "Whitney", "Bon Iver"],
};

let day = "Saturday";
let alarm = "none";

if (day == "Saturday" || day == "Sunday") {
    alarm = person.weekendAlarm
} else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
    alarm = person.weekdayAlarm
}

person.favBands.push("Fleet Foxes")

console.log(person.favBands)