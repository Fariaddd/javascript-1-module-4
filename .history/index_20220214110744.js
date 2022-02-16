// example

const URL = "https://elephant-api.herokuapp.com/elephants";

// my proxy server

const proxy = "https://noroffcors.herokuapp.com/";

const corsFixUrl = proxy + URL;

async function makeApiCall() {
    try {
        const response = await fetch(corsFixUrl);
        // convert the response to be JSON date

        const elephantsDate = await response.json();
        console.log(elephantsDate);

    }
    catch (e) {

    }
}

makeApiCall();