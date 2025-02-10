import { delay, http, HttpResponse } from "msw";
import { BASE_URL, RECIPES } from "@constants";

export const handlers = [
  http.get(`${BASE_URL}/recipe`, () => {
    delay(1500);
    return HttpResponse.json({
      recipes: RECIPES,
    });
  }),
  http.get(`${BASE_URL}/recipe/:id`, ({ params }) => {
    delay(1000);
    const { id } = params;
    const recipe = RECIPES.find((recipe) => recipe.id === Number(id));

    if (recipe === undefined) {
      return HttpResponse.json(
        { message: "Recipe not found" },
        { status: 404 }
      );
    }

    return HttpResponse.json(recipe);
  }),
];
