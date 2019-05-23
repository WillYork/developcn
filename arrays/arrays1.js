let films = ["American Beauty",
                "Blade Runner",
                "The Edukators",
                "Pulp Fiction",
                "The Revenant",
                "Full Metal Jacket",
                "The Shining",
                "Apocalypse Now"]

console.log("My third favourite film is " + films[2])
console.log("My sixth favourite film is " + films[5])
console.log("I have " + films.length + " favourite films.")


let books = ["The Secret History",
                "The Beach",
                "Number 9 Dream",
                "Catcher In The Rye",
                "Ghostwritten",
                "Where The Wild Things Are"]

console.log("My second favourite book is " + books[1] + ". I have " + books.length + " favourite books.")

let favourites = [...films,
                    ...books]

console.log("I have " + favourites.length + " favourite films and books. My twelth favourite is " + favourites[11] + ".")

let albums = ["Physical Grafitti",
                "Rumours",
                "Graceland",
                "Half-Light",
                "For Emma, Forever Ago",
                "Carrie & Lowell",
                "The Boy with the Arab Strap"]

let favouriteEverything = [...films,
                            ...books,
                            ...albums]

console.log("I have " + favouriteEverything.length + " favourite things in total. My fifth favourite album is " + albums[4] + " by Bon Iver.")