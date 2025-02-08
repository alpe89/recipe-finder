import { http, HttpResponse } from "msw";
import { BASE_URL, RECIPES } from "@constants";

export const handlers = [
  http.get(`${BASE_URL}/recipes`, () => {
    return HttpResponse.json({
      recipes: RECIPES,
    });
  }),
];
