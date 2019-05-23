let music = "myMusic"
if (music == "myMusic") {
    console.log("Oh no it's that classical again");
} else if (music == "noMusic") {
    console.log("Arh, peace and quiet")
} else {
    console.log("Nice and noisy")
}

//=== checks the value and type, == just checks the value
if (1==="1") {
    console.log(true);
} else {
    console.log(false);
}
//output: false (because type is not equal)

if (1=="1") {
    console.log(true);
} else {
    console.log(false);
}
//output: true (because value is equal)

//!== checks whether the type and value are different, != checks whether the value is different
if (1!="1") {
    console.log(true)
} else {
    console.log(false)
}
//output: false (because the statement is false, the values are equal)

if (1!=="1") {
    console.log(true)
} else {
    console.log(false)
}
//output: true (because the statement is true, the values are equal but the type is different)