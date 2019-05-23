let time = 19
let placeOfWork = "London" 
let townOfHome = "Manchester"

if (time >= 22 || time < 6) {
    console.log(`I am sleeping at my home in ${townOfHome}. Leave me alone.`)
} else if (time >= 6 && time <= 7) {
    console.log(`I am getting ready for work in ${townOfHome}.`)
} else if (time >= 8 && time <= 10) {
    console.log(`I am commuting from ${townOfHome} to ${placeOfWork}.`)
} else if (time >= 11 && time <= 17) {
    console.log(`I am working in ${placeOfWork}. Call me to book a meeting.`)
} else if (time >= 18 && time <= 20) {
    console.log(`I am on my way back from ${placeOfWork} to ${townOfHome}.`)
} else if (time = 21) {
    console.log(`I'm spending time with my family in ${townOfHome}. Seriously, leave me alone.`)
}

