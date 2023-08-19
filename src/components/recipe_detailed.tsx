import { Recipe } from "./recipes";

interface RecipeDetailedProps {
  recipe: Recipe;
}

export const RecipeDetailed = (props: RecipeDetailedProps) => {
  return (
    <div className="flex grid grid-flow-row auto-row-max justify-center font-serif">
      <h1 className="text-center" style={{ fontWeight: 'bold', fontSize:32 }}>{props.recipe.title}</h1>
     
      <p className="text-center" style={{ fontSize:18}}>{props.recipe.description}</p>
      <h2  className="pl-20 pt-20 text-center" style={{ fontWeight: '600', fontSize: 26 }}>Ingredientes:</h2>
      {props.recipe.ingredients.map((ingredient) => {
        return <p className="ml-40" style={{ fontSize:18}}>{"· " + ingredient}</p>;
      })}

      <div className="pt-10">
        <h2  className="text-center"  style={{ fontWeight: '600', fontSize: 26 }}> Pasos:</h2>
        {props.recipe.steps.map((step, index) => {
          return (
              <p className="col-span-9 ml-40 pt-3" style={{ fontSize:18}}>{index+ ". "}&nbsp; {step}</p>
          );
        })}
      </div>
    </div>
  );
};
