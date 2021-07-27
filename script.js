const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");
document.addEventListener("DOMContentLoaded", getJoke)

button.addEventListener("click", getJoke);

async function getJoke() {
    const jokeData = await fetch("https://official-joke-api.appspot.com/jokes/random", {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeobj = await jokeData.json();
    jokeText.innerHTML = `${jokeobj.setup} <br></br> ${jokeobj.punchline}`


}
