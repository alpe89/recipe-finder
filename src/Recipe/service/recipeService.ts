import { BASE_URL } from "@constants";

export type Recipe = {
  id: number;
  name: string;
  image?: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export type RecipeResponse = {
  recipes: Recipe[];
};

export const getRecipes = async (): Promise<RecipeResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/recipe`);

    if (!response.ok) {
      throw new Error("failed to fetch recipes");
    }

    return await response.json();
  } catch {
    throw new Error("unexpected error in fetching recipes");
  }
};

export const getSearchedRecipes = async (
  search: FormData
): Promise<RecipeResponse> => {
  try {
    const keywords = search.get("keywords") as string;
    const ingredients = search.getAll("ingredients") as string[];

    const queryParams = new URLSearchParams();
    queryParams.set("keywords", keywords);
    queryParams.set("ingredients", ingredients.join(","));

    const response = await fetch(
      `${BASE_URL}/recipe?${queryParams.toString()}`
    );

    if (!response.ok) {
      throw new Error("failed to fetch recipes");
    }

    return await response.json();
  } catch {
    throw new Error("unexpected error in fetching recipes");
  }
};

export const getRecipe = async (id: number): Promise<Recipe> => {
  try {
    const response = await fetch(`${BASE_URL}/recipe/${id}`);

    if (!response.ok) {
      throw new Error(`failed to fetch recipe id: ${id}`);
    }

    return await response.json();
  } catch {
    throw new Error(`unexpected error in fetching recipe id: ${id}`);
  }
};
