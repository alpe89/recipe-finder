import { Recipe } from "@services";
import { SearchResults } from "./components";

type SearchPageProps = {
  recipes: Recipe[];
};

const SearchPage = ({ recipes }: SearchPageProps) => {
  console.log(recipes);

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">
        Find tonight's recipe!
      </h1>
      <SearchResults results={recipes} />
    </section>
  );
};

SearchPage.displayName = "SearchPage";

export { SearchPage };
