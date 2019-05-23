let filmIndex = [
    "Brick",
    "The Edukators",
    "American Psycho",
    "The Revenant"
];
for (i=0;i<filmIndex.length;i++){
    console.log(filmIndex[i])
};

const filmCheck = () => {
    if (filmIndex[2] == "American Psycho") {
        console.log("yey it's american psycho")
    } else {
        console.log("booo, we want american psycho")
    }
}
filmCheck()