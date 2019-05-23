//search() returns the first index of the value in brackets
let str = "Oreo ate all of the flowers in the vase."
let n = str.search("flowers");
console.log(n);

//lastIndexOf() returns the last index of the value in brackets
let m = str.lastIndexOf("a");
console.log(m);

//slice() returns an string between the indices in the brackets, or if it is one index it will return
//the string from the single index to the end.
let colours = ("red, orange, yellow, green, blue, indigo, violet");
console.log(colours.slice(5, 11));
console.log(colours.slice(34));

//substring() returns the characters between the indices in the brackets
let cat = "Jaguar";
console.log(cat.substring(2,5));

//substr() returns the string from the first index, upto the length of the second value
console.log(cat.substr(1, 2));

//replace() returns a new string, replacing the first value with the second
let chocoBars = ("mars, milkybar, doubledecker, galaxy, snickers");
console.log(chocoBars.replace("milkybar", "crunchie"));

//concat() returns a string joined to any number of other strings
console.log("Bagpuss".concat(" laid on", " his back."))

//charAt() returns the character at the specified index
let sent = "Application Error"
console.log("The character at index 5 is " + sent.charAt(5))