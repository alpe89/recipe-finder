import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/favourites")({
  component: FavouritesPage,
});

function FavouritesPage() {
  return <section>Favourites Page</section>;
}
