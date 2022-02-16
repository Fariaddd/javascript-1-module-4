// Sometimes we retrieve only a single result from an API call.
// In this case, we will work with a single object rather
// than an array of objects.

// Because we are not working with an array,
// we access the result properties directly.


// Example 1
// https://rawg.io/apidocs the API
// API Documentation https://api.rawg.io/docs/#operation/games_read
const container = document.querySelector(".container");

const url = "https://api.rawg.io/api/games/4200?key=54582cd735a340b89b17702eae51578b";

async function fetchGame() {

    try {
        const response = await fetch(url);


    } catch (error) {
        console.log(error);
    }

}


fetchGame();

