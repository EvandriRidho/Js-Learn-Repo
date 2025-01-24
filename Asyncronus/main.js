const readingBook = () => {
    console.log("I am reading a book");
}

const watchingMovie = () => {
    console.log("I am watching a movie");
}

const playingGame = () => {
    console.log("I am playing a game");
}

const orderFood = async () => {
    console.log("I am ordering food");

    let result = await fetch("https://google.com/");
    console.log("I received the food");

    if (result.ok) {
        return 'Food is Good'
    } else {
        throw new Error("Food is not good");
    }
}

const eat = (result) => {
    console.log("I am eating the food : ", result);
}

const complain = (message) => {
    console.log("I am complaining about the food : ", message);
}

// Eksekusi Program
readingBook();
watchingMovie();
let orderFodd = Promise.all([
    orderFood(),
    orderFood(),
    orderFood(),
])
orderFodd.then((data) => {
    console.log(data);
})
playingGame();
