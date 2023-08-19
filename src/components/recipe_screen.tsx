import React from "react";

import { AllRecipes } from "./all_recipes";
import { Recipe, testRecipe } from "./recipes";
import { RecipeDetailed } from "./recipe_detailed";

function RecipesScreen() {
  const [recipe, setRecipe] = React.useState<null | Recipe>(null);
  if (recipe) {
    return <RecipeDetailed setRecipe={setRecipe} recipe={recipe} />;
  } else {
    return <AllRecipes recipes={testRecipe} setRecipe={setRecipe} />;
  }
}

export default RecipesScreen;
