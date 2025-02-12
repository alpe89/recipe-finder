import { createFileRoute } from "@tanstack/react-router";
import { SearchPage, getIngredients } from "@search";
import { getRecipes } from "@recipe";

const getData = async () => {
  try {
    const [recipes, ingredients] = await Promise.all([
      getRecipes(),
      getIngredients(),
    ]);

    return {
      recipesResponse: recipes,
      ingredientsResponse: ingredients,
    };
  } catch {
    throw new Error("Failed to fetch data");
  }
};

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => getData(),
});

function Index() {
  const { recipesResponse, ingredientsResponse } = Route.useLoaderData();

  return (
    <SearchPage
      recipes={recipesResponse.recipes}
      ingredients={ingredientsResponse.ingredients}
    />
  );
}
