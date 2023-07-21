const jokecontainer = document.getElementById('joker');
const jokebtn = document.getElementById('btn');
const url =
  'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokecontainer.textContent = data.joke;
    })
    .catch((error) => {
      console.error('Error fetching joke:', error);
      jokecontainer.textContent = 'Failed to fetch joke. Please try again later.';
    });
};

// Event listener for the "Get Random Joke" button
jokebtn.addEventListener('click', getJoke);

// Update the joke when the page loads
getJoke();
