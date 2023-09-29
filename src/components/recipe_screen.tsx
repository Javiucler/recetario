import React from "react";

import { AllRecipes } from "./all_recipes";
import { Recipe, testRecipe } from "./recipes";
import { RecipeDetailed } from "./recipe_detailed";

function RecipesScreen() {
  const [recipe, setRecipe] = React.useState<null | Recipe>(null);
  return (
    <div className="bg-background w-screen h-screen">
      {recipe ? (
        <RecipeDetailed setRecipe={setRecipe} recipe={recipe} />
      ) : (
        <AllRecipes recipes={testRecipe} setRecipe={setRecipe} />
      )}
    </div>
  );
}

export default RecipesScreen;
