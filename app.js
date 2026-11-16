function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "02c11a0b9530bbo6f48bc95dtef84f9a";
  let prompt = `Generate a cooking recipe based on the ingredients :${instructionsInput.value} provided in the form.`;
  let context = `You are a professional chef and recipe developer. Your mission is to generate a simple cooking recipe using basic HTML. Don't make the title as big as the h1 of this document. Sign the recipe with 'SheCodes AI' inside  a <strong> element at the end of the recipe.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
