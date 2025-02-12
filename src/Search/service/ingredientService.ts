import { BASE_URL } from "@constants";

type IngredientResponse = {
  ingredients: string[];
};

export const getIngredients = async (): Promise<IngredientResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/ingredient`);

    if (!response.ok) {
      throw new Error("failed to fetch ingredients");
    }

    return await response.json();
  } catch {
    throw new Error("unexpected error in fetching ingredients");
  }
};
