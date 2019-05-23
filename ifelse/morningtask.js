let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "

console.log(`   |   |  `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log(`   |   |  `);
console.log(`-----------`);
console.log(`   |   |  `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |  `);
console.log(`-----------`);
console.log(`   |   |  `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |  `);

if (space1 == space2 && space1 == space3) {
    console.log("Winner winner, chicken dinner!");
} else if (space4 == space5 && space4 == space6) {
    console.log("Winner winner, chicken dinner!");
} else if (space7 == space8 && space7 == space9) {
    console.log("Winner winner, chicken dinner!");
} else if (space1 == space5 && space1 == space9) {
    console.log("Winner winner, chicken dinner!")
} else if (space2 == space5 && space2 == space8) {
    console.log("Winner winner, chicken dinner!")
} else if (space3 == space5 && space3 == space7) {
    console.log("Winner winner, chicken dinner!")
} else if (space1 == space4 && space1 == space7) {
    console.log("Winner winner, chicken dinner!")
} else if (space3 == space6 && space4 == space9) {
    console.log("Winner winner, chicken dinner!")
} else {
    console.log("Unlucky. Try again.")
}