//1
const subOrder = (item1, item2, item3, item4, item5) => {
    console.log(`You have ordered a sandwich with ${item1}, ${item2}, ${item3}, ${item4} and ${item5}. Please collect your sandwich.`)
}

subOrder("salami", "ham", "lettuce", "tomato", "mayonaise")

//2
let menu = ["thai green curry", "fajitas", "keralan chicken"]
menu.unshift("bbq ribs")
console.log(menu)

//3
const numGen = () => {
    return (Math.floor(Math.random()*49+1))
}

const genorator = (times) => {
    for (times = 0; times <= 5; times++) {
        console.log(numGen())
    }
}

console.log(genorator())

//4
for (i=9;i>-1;i--) {
    console.log(i)
}