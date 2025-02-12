import { useState } from "react";
import { Recipe } from "@recipe";
import { SearchForm, SearchResults } from "./components";

type SearchPageProps = {
  recipes: Recipe[];
  ingredients: string[];
};

const SearchPage = ({
  recipes: fetchedRecipes,
  ingredients,
}: SearchPageProps) => {
  const [recipes, setRecipes] = useState(fetchedRecipes);

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">
        Find tonight's recipe!
      </h1>
      <SearchForm ingredients={ingredients} setRecipes={setRecipes} />
      <SearchResults results={recipes} />
    </section>
  );
};

SearchPage.displayName = "SearchPage";

export { SearchPage };
