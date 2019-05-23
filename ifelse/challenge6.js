let jibberish = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let arrayjib = jibberish.split("");
let aPos = arrayjib.lastIndexOf("a", -1);
let ePos = arrayjib.lastIndexOf("e", -1);
let iPos = arrayjib.lastIndexOf("i", -1);
let oPos = arrayjib.lastIndexOf("o", -1);
let uPos = arrayjib.lastIndexOf("u", -1);
let posArray = [aPos, ePos, iPos, oPos, uPos];
let sortArray = posArray.sort()
console.log(sortArray.slice(-1))