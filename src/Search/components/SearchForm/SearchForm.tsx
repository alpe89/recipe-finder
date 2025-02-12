import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { getSearchedRecipes, Recipe } from "@recipe";
import { IngredientInput } from "../IngredientInput";
import { KeywordInput } from "../KeywordInput";
import { SearchIcon } from "../SearchIcon";

type SearchFormProps = {
  ingredients: string[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
};

const SearchForm = ({ ingredients, setRecipes }: SearchFormProps) => {
  const [keywords, setKeywords] = useState("");
  const [ingredientsSelected, setIngredientsSelected] = useState<string[]>([]);
  const [showIngredientsList, setShowIngredientsList] = useState(false);

  const onKeywordsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeywords(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const recipes = await getSearchedRecipes(formData);
    setRecipes(recipes.recipes);
  };

  const toggleIngredientsList = () => {
    setShowIngredientsList((currentValue) => !currentValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="bg-white rounded-lg shadow-md p-4">
        <KeywordInput keywords={keywords} onKeywordsChange={onKeywordsChange} />
        <hr className="my-3 text-gray-300" />
        <div>
          <div>
            <p className="text-brand text-lg font-bold">
              Search by ingredient?
            </p>
            <button
              className="bg-brand hover:bg-green-700 rounded-md text-white px-2 py-0.5 cursor-pointer mt-2"
              onClick={toggleIngredientsList}
              type="button"
            >
              {showIngredientsList ? "Hide" : "Show"} ingredients
            </button>
          </div>
          {showIngredientsList && (
            <div className="bg-brand/25 rounded-md p-4 mt-4">
              <ul className="grid grid-cols-2 gap-2 mt-2">
                {ingredients.map((ingredient) => (
                  <li key={ingredient} className="text-sm">
                    <IngredientInput
                      name={ingredient}
                      setIngredientsSelected={setIngredientsSelected}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-brand font-bold text-white p-2.5 rounded-md hover:bg-green-700 transition-colors cursor-pointer disabled:bg-gray-400 flex items-center mt-4"
          disabled={keywords === "" && ingredientsSelected.length === 0}
        >
          Search
          <span role="img" aria-hidden="true" className="ml-2">
            <SearchIcon />
          </span>
        </button>
      </section>
    </form>
  );
};

SearchForm.displayName = "SearchForm";

export { SearchForm };
