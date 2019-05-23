//Edit the snippet below to include two parameters and a
//running order count updated when the function is called

let orderCount = 0;
const takeOrder = (topping, topping2) => {
 console.log(`Pizza with ${topping} and ${topping2}.`);
 orderCount++;
}
takeOrder("pineapple", "guacamole");
takeOrder("pineapple", "guacamole");
takeOrder("pineapple", "guacamole");
console.log(`This pizza has been ordered ${orderCount} times.`)