// Filter method Example

// Example 1 Filter Method with Static Data

// 1. I want to import the data array to use it

import teams from "./data/teams.js"

console.log(teams);

// 2. selecet the teams container class
// 3. select the search class

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

//4. assig the teams to data to a variable

let teamsToRuender = teams;

// 5. loop on the teams array and inject data tot he DOM teamContainer

function renderTeams() {
    for (let j = 0; j < teamsToRuender.length; j++) {
        // console.log(teamsToRuender[j]);
        teamContainer.innerHTML += `<div class="team"><h3>${teamsToRuender[j].full_name}</h3></div>`

    }

}

renderTeams();



//6. wrap this for loop in a function and then use it 

// I want to detact that I wrote something (text) inside the input


search.onkeyup = function (event) {
    //console.log(event);
    // 8. get the search value or the search the user entered
    console.log(event.target.value);
    const searchValue = event.target.value.trim().toLowerCase();
    console.log("searchValue ", searchValue);
    // {
    //     id: 1,
    //     abbreviation: "ATL",
    //     city: "Atlanta",
    //     conference: "East",
    //     division: "Southeast",
    //     full_name: "Atlanta Hawks",
    //     name: "Hawks"
    // }


    const filteredTeams = teamsToRuender.filter(function (team) {
        // check if any of the full_name property stars with the searchValue
        if (team.full_name.toLowerCase().startsWith(searchValue)) {
            return true;

        }
    })
    console.log((filteredTeams));
}