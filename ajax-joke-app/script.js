const image = document.querySelector("img");
const jokeDiv = document.querySelector("#display-joke");
const button = document.querySelector("#get-joke");

button.addEventListener("click", function () {
  getRandomeJoke();
});

function getRandomeJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  // const url = "https://api.chucknorris.io/jokes/ER_NIZnaQ0CF1kL7GIedsw";
  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if (this.status === 200 && this.readyState == 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      jokeDiv.innerHTML = `${data.value}`;
    } else {
      this.onerror = onerror();
    }
  };
  ajax.send();
}
function onerror() {
  jokeDiv.textContent = "there was an error!!!";
}
