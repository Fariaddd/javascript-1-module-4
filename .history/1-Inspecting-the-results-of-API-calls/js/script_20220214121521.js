// 1.
// When making API calls, the most important
// thing to do is to
// inspect the JSON that the call returns.
//
// 2.
// You can't make assumptions about what
// the JSON will contain and what properties you can access.

// You can use a simple console.log or software like Postman.

const resultsContainer = document.querySelector(".results");

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
const url = "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b";

async function callApi() {
    const response = await fetch(url);
    const JSONResponse = await response.json();

    console.log(JSONResponse);
    const results = JSONResponse.results;
    console.log("result", results);
    results.forEach((game) => {
        resultsContainer.innerHTML += `<div>${game.name}</div>`
    })

}

callApi().then();

// we can use a loop too istend forEach!!