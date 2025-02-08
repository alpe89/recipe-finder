import { BASE_URL } from "@constants";

export type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export type RecipeResponse = {
  recipes: Recipe[];
};

export const getRecipes = async (): Promise<RecipeResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/recipes`);

    if (!response.ok) {
      throw new Error("failed to fetch recipes");
    }

    return await response.json();
  } catch {
    throw new Error("unexpected error in fetching recipes");
  }
};
