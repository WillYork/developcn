//Challenge 19 - Create a function that takes two strings as a parameters and returns the strings concatenated.
const merge = (str1, str2) => {
    return str1.concat(str2)
}
console.log(merge("ele","phant"))

//Challenge 20 - Create a function that takes a string as a parameter and counts the number of vowels in it and returns the result.

let animals = [
    "anaconda",
    "elephant",
    "tiger",
    "hippopotamus",
    "rhinoceros"
]
let array = []

for (i=0;i<animals.length;i++) {
    array = animals[i].split(",")
    return array
}
console.log(array)


for (i=0;i<array.length;i++){
    const check = (str) => {
        let counter = 0
        let str1 = str.split("")
        console.log(str1)
        for (i=0;i<str1.length;i++){
            if (str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u") {
            counter += 1
            }
        }
        return counter
    }
}