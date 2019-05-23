//Challenge 1 - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

let array = []
let array1 = []
let array2 = 0

for (i=1;i<1000;i++){
    if (i%3 == 0 || i%5 == 0) {
        array.push(i)
        array1 = array
        for (j=0;j<array.length;j++){
            array2 = array2 + array1[j]
        }
    }
}
console.log(array2)