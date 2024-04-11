// Specify the API endpoint
const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

let jokeParagraph;

document.addEventListener('DOMContentLoaded', async function() {
    // Code to execute after the DOM is fully loaded
    jokeParagraph = document.getElementById('joke-body');
    generatePage();
});

// Make the HTTP request
async function generateJoke() {
    fetch(apiUrl)
    .then(response => {
        // Check if the response is successful (status code 200)
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Check if the joke is a single joke or a two-part joke
        if (data.type === 'single') {
            jokeParagraph.innerText = data.joke;
        } else if (data.type === 'twopart') {
            jokeParagraph.innerText = data.setup;
            jokeParagraph.innerText = data.delivery;
        }
    })
    .catch(error => {
    console.error('Error fetching joke:', error);
    });
}

async function generateImage() {
    fetch('https://source.unsplash.com/random')
    .then(response => {
        //document.getElementById('randomImage').src = response.url;
        document.body.style.background = `#f3f3f3 url('${response.url}') no-repeat left top`;
        console.log(response);
    })
    .catch(error => {
        console.log('Error fetching random image: ', error);
    });
}

async function generatePage() {
    generateJoke();
    generateImage();
}