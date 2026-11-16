function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Loading...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
