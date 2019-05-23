//Array() allows you to set a length for the array if a single number is passed to the constructor
let array1 = Array(3); //array1.length = 3
let array2 = ["four", 5, false]; //array2.length = 3
let array3 = Array("seven", 8, true); //array3.length = 3

//map() creates a new array with the results of calling a provided function on every element in the array
let array4 = [2, 4, 6, 8];
const map1 = array4.map(x => x * 2); //map1 = [ 4, 8, 12, 16 ]