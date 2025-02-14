function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructions = document.querySelector("#user-instructions");
  let apiKey = "e14445dc5a1fa43f7b3b01otf4a4d0fb";
  let context =
    "You are a intellegent, friendly food expert, you love to suggest simple recepies. Generate using basic html. Please make sure to complete the recipe and Make sure to follow the user instructions.";
  let prompt = `user instructions: Generate a recipe based on the users ${instructions.value}. Provide detailed instructions, estimated preparation time, and serving size.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeElement = document.querySelector("#recipe-generator");
recipeElement.addEventListener("submit", generateRecipe);
