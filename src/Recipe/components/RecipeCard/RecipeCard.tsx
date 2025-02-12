import { Link } from "@tanstack/react-router";
import { Recipe } from "@search/service";
import { BookmarkButton } from "../BookmarkButton";

import placeholder from "../../../assets/placeholder.svg";

type RecipeCardProps = Recipe;

const RecipeCard = ({ id, name, description, image }: RecipeCardProps) => {
  return (
    <li className="bg-white rounded-lg shadow-md overflow-hidden">
      <figure className="aspect-auto">
        <img
          src={image ?? placeholder}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <BookmarkButton id={id} />
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/recipe/$recipeId`}
            params={{ recipeId: id.toString() }}
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
