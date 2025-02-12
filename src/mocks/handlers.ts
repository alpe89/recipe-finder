import { delay, http, HttpResponse } from "msw";
import { BASE_URL, RECIPES } from "@constants";

export const handlers = [
  http.get(`${BASE_URL}/recipe`, ({ request }) => {
    delay(1500);
    const url = new URL(request.url);

    const keywords = url.searchParams.get("keywords")?.split(" ") ?? [];
    const ingredients = url.searchParams.get("ingredients")?.split(",") ?? [];

    if (keywords.length === 0 && ingredients.length === 0) {
      return HttpResponse.json({
        recipes: RECIPES,
      });
    }

    const recipes = RECIPES.filter((recipe) => {
      const matchesKeywords = keywords.some(
        (keyword) =>
          recipe.name.includes(keyword) || recipe.description.includes(keyword)
      );

      const matchesIngredients = recipe.ingredients.some((ingredient) =>
        ingredients.includes(ingredient)
      );

      return matchesKeywords || matchesIngredients;
    });

    return HttpResponse.json({
      recipes,
    });
  }),
  http.post(`${BASE_URL}/recipe`, async ({ request }) => {
    const body = (await request.json()) as { ids: number[] };

    const recipes = RECIPES.filter((recipe) => {
      return body.ids.includes(recipe.id);
    });

    return HttpResponse.json({ recipes }, { status: 200 });
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
  http.get(`${BASE_URL}/ingredient`, () => {
    delay(1000);
    const ingredients = RECIPES.map((recipe) => recipe.ingredients).flat();

    return HttpResponse.json({
      ingredients: Array.from(new Set(ingredients)),
    });
  }),
];
