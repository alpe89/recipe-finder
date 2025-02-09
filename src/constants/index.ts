export const BASE_URL = "https://recipe-pilot.com";

export const LOCAL_STORAGE_NAME = "recipe-pilot-storage";

export type FavouriteList = number[];

export const LOCAL_STORAGE_DEFAULT_STATE: { favourites: FavouriteList } = {
  favourites: [],
};

export const RECIPES = [
  {
    id: 1,
    name: "Spaghetti alla Carbonara",
    description:
      "A classic Italian pasta dish with eggs, cheese, and guanciale.",
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
    description: "Fluffy breakfast pancakes perfect with syrup or fruit.",
    ingredients: ["flour", "eggs", "milk", "sugar"],
    steps: ["Mix everything together", "Fry pancakes"],
  },
  {
    id: 3,
    name: "Pizza Margherita",
    description:
      "A simple yet delicious pizza topped with tomatoes, mozzarella, and basil.",
    ingredients: ["flour", "mozzarella", "tomato", "olive oil", "basil"],
    steps: ["Cook pizza"],
  },
  {
    id: 4,
    name: "Cosce di pollo al forno",
    description: "Oven-roasted chicken thighs with olive oil and black pepper.",
    ingredients: ["chicken", "olive oil", "black pepper"],
    steps: ["Cook chicken"],
  },
  {
    id: 5,
    name: "Lasagna",
    description: "Layered pasta dish with meat, tomato sauce, and cheese.",
    ingredients: ["pasta sheets", "ground beef", "tomato sauce", "cheese"],
    steps: ["Layer ingredients", "Bake lasagna"],
  },
  {
    id: 6,
    name: "Tiramisu",
    description:
      "A classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
    ingredients: ["mascarpone", "eggs", "coffee", "cocoa powder", "sugar"],
    steps: ["Prepare coffee", "Layer ingredients", "Chill in fridge"],
  },
  {
    id: 7,
    name: "Risotto ai funghi",
    description: "Creamy risotto with mushrooms and cheese.",
    ingredients: ["rice", "mushrooms", "butter", "cheese", "broth"],
    steps: [
      "Cook rice with broth",
      "Add mushrooms",
      "Mix with butter and cheese",
    ],
  },
  {
    id: 8,
    name: "Bruschetta al pomodoro",
    description: "Toasted bread topped with fresh tomatoes, garlic, and basil.",
    ingredients: ["bread", "tomatoes", "garlic", "basil", "olive oil"],
    steps: ["Toast bread", "Top with tomato mixture"],
  },
  {
    id: 9,
    name: "Cacio e pepe",
    description:
      "A simple yet flavorful pasta dish with cheese and black pepper.",
    ingredients: ["spaghetti", "cheese", "black pepper"],
    steps: ["Cook pasta", "Mix with cheese and pepper"],
  },
  {
    id: 10,
    name: "Polpette di carne",
    description: "Savory meatballs made with breadcrumbs, eggs, and cheese.",
    ingredients: ["ground meat", "breadcrumbs", "eggs", "cheese", "parsley"],
    steps: ["Mix ingredients", "Shape into balls", "Fry or bake"],
  },
  {
    id: 11,
    name: "Frittata di zucchine",
    description: "An Italian-style omelet with zucchini and cheese.",
    ingredients: ["eggs", "zucchini", "cheese", "olive oil"],
    steps: ["Sauté zucchini", "Mix with eggs", "Cook in pan"],
  },
  {
    id: 12,
    name: "Bistecca alla Fiorentina",
    description: "A thick, juicy Florentine-style grilled steak.",
    ingredients: ["steak", "salt", "olive oil"],
    steps: ["Grill steak", "Season with salt and oil"],
  },
  {
    id: 13,
    name: "Caprese Salad",
    description:
      "A refreshing Italian salad with tomatoes, mozzarella, and basil.",
    ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "salt"],
    steps: ["Slice ingredients", "Assemble salad", "Drizzle with oil"],
  },
  {
    id: 14,
    name: "Gnocchi al pesto",
    description: "Soft potato gnocchi coated in fresh basil pesto.",
    ingredients: ["gnocchi", "basil", "parmesan", "pine nuts", "olive oil"],
    steps: ["Cook gnocchi", "Mix with pesto"],
  },
  {
    id: 15,
    name: "Orecchiette con cime di rapa",
    description: "A traditional pasta dish with turnip greens and garlic.",
    ingredients: ["orecchiette pasta", "broccoli rabe", "garlic", "olive oil"],
    steps: ["Cook pasta", "Sauté with garlic and greens"],
  },
];
