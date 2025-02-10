import { http, HttpResponse } from "msw";
import { BASE_URL, RECIPES } from "@constants";

export const handlers = [
  http.get(`${BASE_URL}/recipe`, () => {
    return HttpResponse.json({
      recipes: RECIPES,
    });
  }),
  http.get(`${BASE_URL}/recipe/:id`, ({ params }) => {
    const { id } = params;
    const recipe = RECIPES.find((recipe) => recipe.id === Number(id));

    if (!recipe) {
      return HttpResponse.json(
        { message: "Recipe not found" },
        { status: 404 }
      );
    }

    return HttpResponse.json(recipe);
  }),
];
