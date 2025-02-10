import { Recipe } from "@services";

type RecipePageProps = Recipe;

const RecipePage = (recipe: RecipePageProps) => {
  console.log(recipe);

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">
        {recipe.name}
      </h1>
      <p>{recipe.description}</p>
    </section>
  );
};

RecipePage.displayName = "RecipePage";

export { RecipePage };
