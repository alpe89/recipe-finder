import { RecipeCard, Recipe } from "@recipe";

type SearchResultsProps = {
  results: Recipe[];
};

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </ul>
  );
};

SearchResults.displayName = "SearchResults";

export { SearchResults };
