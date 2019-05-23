let jukeBox80s = [
    "Styx - Come Sail Away",
    "Baltimora - Tarzan Boy",
    "Van Halen - Jump",
    "Daryl Hall & John Oates - You Make My Dreams Come True",
    "Elton John - I'm Still Standing",
    "Tears For Fears - Everybody Wants To Rule The World",
    "Kim Wilde - Kids In American",
    "Fine Young Cannibals - She Drives Me Crazy",
]

//Add a track:
jukeBox80s.push("Lionel Richie - Dancing On The Ceiling")

//Remove last track:
jukeBox80s.pop()

//Remove track at specified index and name that track:
console.log(jukeBox80s.shift())

//Add a track to the beginning and return the new length of the playlist:
console.log(jukeBox80s.unshift("Styx - Come Sail Away"))

//Return a section of the playlist:
console.log(jukeBox80s.slice(1,4))

//Sorts the playlist into alphabetic order:
jukeBox80s.sort()

//Replace a song at specified index (index, how many, replace with)
jukeBox80s.splice(0, 1, "Lionel Richie - Dancing On The Ceiling")