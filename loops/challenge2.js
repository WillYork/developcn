//Challenge 2 - Take this string “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.
//The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.

let jibberish = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let indexOfFirst = jibberish.indexOf("hi")
let indexOfLast = jibberish.lastIndexOf("hi")

console.log(`The first occurance of the word 'hi' appears at index ${indexOfFirst}. The last occurance appears at index ${indexOfLast}.`)