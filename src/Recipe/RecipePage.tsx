import { Recipe } from "@search/service";
import { BookmarkButton, IngredientsIcon, StepsIcon } from "./components";

import placeholder from "../assets/placeholder.svg";

type RecipePageProps = Recipe;

const RecipePage = (recipe: RecipePageProps) => {
  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden">
      <figure className="aspect-auto">
        <img
          src={recipe.image ?? placeholder}
          alt={recipe.name}
          className="w-full h-96 object-cover"
        />
      </figure>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-brand flex items-center justify-between">
          {recipe.name}
          <BookmarkButton id={recipe.id} />
        </h1>
        <p className="text-gray-600 mb-6">{recipe.description}</p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-brand">
            <span role="img" className="mr-1" aria-hidden="true">
              <IngredientsIcon />
            </span>
            Ingredients
          </h2>
          <ul className="bg-muted p-4 rounded-lg space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="mr-2 text-xl" role="img" aria-hidden="true">
                  🥕
                </span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-brand">
            <span role="img" className="mr-1" aria-hidden="true">
              <StepsIcon />
            </span>
            Instructions
          </h2>
          <ol className="space-y-2 p-4 list-decimal list-inside">
            {recipe.steps.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

RecipePage.displayName = "RecipePage";

export { RecipePage };
