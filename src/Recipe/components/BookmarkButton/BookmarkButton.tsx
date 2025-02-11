import {
  isRecipeSaved,
  removeRecipe,
  saveRecipe,
  useFavourites,
} from "@favourites";
import { Recipe } from "@services";
import { HeartIcon } from "../HeartIcon";

type BookmarkButtonProps = Pick<Recipe, "id">;

const ADD_TO_FAVOURITES = "Add to my favourites!";
const REMOVE_FROM_FAVOURITES = "Remove from my favourites!";

const BookmarkButton = ({ id }: BookmarkButtonProps) => {
  useFavourites();

  const isBookmarked = isRecipeSaved(id);

  const handleBookmarkClick = () => {
    if (isBookmarked) {
      removeRecipe(id);
    } else {
      saveRecipe(id);
    }
  };

  return (
    <button className="cursor-pointer" onClick={handleBookmarkClick}>
      <span
        role="img"
        aria-label={isBookmarked ? REMOVE_FROM_FAVOURITES : ADD_TO_FAVOURITES}
      >
        <HeartIcon active={isBookmarked} />
      </span>
    </button>
  );
};

BookmarkButton.displayName = "BookmarkButton";

export { BookmarkButton };
