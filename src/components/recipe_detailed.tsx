import { Recipe } from "./recipes";
import { BiArrowBack } from "react-icons/bi";

interface RecipeDetailedProps {
  recipe: Recipe;
  setRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
}

export const RecipeDetailed = (props: RecipeDetailedProps) => {
  return (
    <div className="flex grid grid-flow-row auto-row-max justify-center font-serif">
      <div className="grid grid-flow-col text-primary">
        <div className="pl-10 flex ">
          <BiArrowBack
            size={50}
            onClick={() => props.setRecipe(null)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h1
        className=""
          style={{ fontWeight: "bold", fontSize: 32 }}
        >
          {props.recipe.title}
        </h1>
      </div>
      <div>
        <p className="text-center" style={{ fontSize: 18 }}>
          {props.recipe.description}
        </p>
        <h2
          className="pl-20 pt-20 text-center "
          style={{ fontWeight: "600", fontSize: 26 }}
        >
          Ingredientes:
        </h2>
        {props.recipe.ingredients.map((ingredient) => {
          return (
            <p className="ml-40" style={{ fontSize: 18 }}>
              {"· " + ingredient}
            </p>
          );
        })}

        <div className="pt-10">
          <h2
            className="text-center"
            style={{ fontWeight: "600", fontSize: 26 }}
          >
            Pasos:
          </h2>
          {props.recipe.steps.map((step, index) => {
            return (
              <p className="ml-40 pt-3" style={{ fontSize: 18 }}>
                {index + ". "}&nbsp; {step}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
