import { Recipe } from "./recipes";

interface AllRecipesProps {
  recipes: Recipe[];
  setRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>
}

export const AllRecipes = (props: AllRecipesProps) => {
  return (
    <div >
    <h1 className="text-center mb-10 text-primary" style={{ fontWeight: 'bold', fontSize:32 }}>Recetario</h1>
      {props.recipes.map((recipe, i) => {
        return (
          <div
            className="grid grid-rows-1 grid-flow-col pl-10  mt-2 outline outline-1 "
            key={recipe.title}
            onClick={() => props.setRecipe(recipe)}
            style={{cursor: 'pointer'}}
          >
            <div className="row-span-1 col-span-1 ">
              <h1 >{i}</h1>
            </div>
            <div className="row-span-1 col-span-4">
              <p>{recipe.title}</p>
            </div>
            <div className="row-span-1 col-span-4">
              <p>{recipe.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
