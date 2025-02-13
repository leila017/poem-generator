function displayRecipe(response) {
  //response.data.answer
  new Typewriter("#recipe", {
    strings: "bla bla bla",
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let apiKey = "e14445dc5a1fa43f7b3b01otf4a4d0fb";
  let context = "";
  let prompt = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeElement = document.querySelector("#recipe-generator");
recipeElement.addEventListener("submit", generateRecipe);
