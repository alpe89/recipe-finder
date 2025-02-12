import { ChangeEvent, Dispatch, SetStateAction } from "react";

type IngredientInputProps = {
  name: string;
  setIngredientsSelected: Dispatch<SetStateAction<string[]>>;
};

const IngredientInput = ({
  name,
  setIngredientsSelected,
}: IngredientInputProps) => {
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setIngredientsSelected((current) => {
      const copy = [...current];

      if (isChecked) {
        copy.push(name);
      } else {
        const index = copy.indexOf(name);
        if (index !== -1) {
          copy.splice(index, 1);
        }
      }

      return copy;
    });
  };

  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id={`ingredient-${name}`}
        name="ingredients"
        className="
    relative peer shrink-0
    appearance-none w-4 h-4 border-2 border-brand rounded-sm bg-white
    mt-1
    checked:bg-brand checked:border-0 cursor-pointer"
        value={name}
        onChange={onCheckboxChange}
      />
      <label htmlFor={`ingredient-${name}`}>{name}</label>
      <svg
        className="
      absolute 
      w-4 h-4 mt-1
      hidden peer-checked:block stroke-white stroke-3 stroke-linecap stroke-linejoin pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

IngredientInput.displayName = "IngredientInput";

export { IngredientInput };
