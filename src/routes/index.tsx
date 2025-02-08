import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "@search";
import { getRecipes } from "@services";

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => getRecipes(),
});

function Index() {
  const data = Route.useLoaderData();

  return <SearchPage recipes={data.recipes} />;
}
