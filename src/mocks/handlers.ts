import { http, HttpResponse } from "msw";
import { BASE_URL } from "@constants";

export const handlers = [
  http.get(`${BASE_URL}/recipes`, () => {
    return HttpResponse.json({
      recipes: [
        {
          id: 1,
          name: "Spaghetti alla Carbonara",
          ingredients: ["spaghetti", "eggs", "guanciale", "cheese"],
          steps: [
            "Cook spaghetti",
            "Fry bacon",
            "Mix eggs and cheese",
            "Mix everything together",
          ],
        },
        {
          id: 2,
          name: "Pancakes",
          ingredients: ["flour", "eggs", "milk", "sugar"],
          steps: ["Mix everything together", "Fry pancakes"],
        },
        {
          id: 3,
          name: "Pizza Margherita",
          ingredients: ["flour", "mozzarella", "tomato", "olive oil", "basil"],
          steps: ["Cook pizza"],
        },
        {
          id: 4,
          name: "Cosce di pollo al forno",
          ingredients: ["chicken", "olive oil", "black pepper"],
          steps: ["Cook chicken"],
        },
      ],
    });
  }),
];
