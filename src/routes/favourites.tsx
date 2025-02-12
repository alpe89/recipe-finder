import { createFileRoute } from "@tanstack/react-router";
import { FavouritesPage, getFavouritesList } from "@favourites";
import { getFavouriteRecipes } from "@recipe";

const getData = async () => {
  try {
    const favouriteIds = getFavouritesList();
    const data = await getFavouriteRecipes(favouriteIds);

    return {
      favouriteRecipes: data,
    };
  } catch {
    throw new Error("Failed to fetch data");
  }
};

export const Route = createFileRoute("/favourites")({
  component: FavouritesRoute,
  loader: () => getData(),
});

function FavouritesRoute() {
  const { favouriteRecipes } = Route.useLoaderData();

  return <FavouritesPage recipes={favouriteRecipes.recipes} />;
}
