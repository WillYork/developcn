let filmIndex = [
    "Brick",
    "The Edukators",
    "American Phsycho",
    "The Revenant",
    "The Terminal"
];
filmIndex.unshift("The Big Lebowski", "Rear Window");
for (faves=0;faves<filmIndex.length;faves++){
    console.log(`Position ${faves+1} in my favourite films list is ${filmIndex[faves]}.`);
}

