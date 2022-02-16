// example

const URL = "https://elephant-api.herokuapp.com/elephants";

async function makeApiCall() {
    try {
        const response = await fetch(URL);
        // convert the response to be JSON date

        const elephantsDate = await response.json();
        console.log(elephantsDate);

    }
    catch (e) {

    }
}

makeApiCall();