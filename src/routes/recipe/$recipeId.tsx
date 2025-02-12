import { RecipePage } from "@recipe";
import { getRecipe } from "@search/service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recipe/$recipeId")({
  component: RouteComponent,
  loader: async ({ params }) => getRecipe(Number(params.recipeId)),
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return <RecipePage {...data} />;
}
