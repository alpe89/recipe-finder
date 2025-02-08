import { Link } from "@tanstack/react-router";
import { Recipe } from "@services";
import { BookmarkIcon } from "./components";

import placeholder from "../../../assets/placeholder.svg";

type RecipeCardProps = Recipe;

const RecipeCard = ({ id, name, description }: RecipeCardProps) => {
  return (
    <li className="bg-white rounded-lg shadow-md overflow-hidden">
      <figure className="aspect-auto">
        <img
          src={placeholder}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <button className="text-gray-400 hover:text-brand transition-colors cursor-pointer">
            <BookmarkIcon />
          </button>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={`/recipe/${id}`}
            className="text-primary hover:text-primary-dark transition-colors"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </li>
  );
};

RecipeCard.displayName = "RecipeCard";

export { RecipeCard };
