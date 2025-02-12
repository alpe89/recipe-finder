import { SearchResults } from "@search/components";
import { Recipe } from "@recipe";

type FavouritesPageProps = {
  recipes: Recipe[];
};

const FavouritesPage = ({ recipes }: FavouritesPageProps) => {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">
        Your favourite recipes!
      </h1>
      {recipes && <SearchResults results={recipes} />}
    </section>
  );
};

FavouritesPage.displayName = "FavouritePage";

export { FavouritesPage };
