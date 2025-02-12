import { ChangeEvent } from "react";

type KeywordInputProps = {
  keywords: string;
  onKeywordsChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const KeywordInput = ({ keywords, onKeywordsChange }: KeywordInputProps) => {
  return (
    <div>
      <label htmlFor="keywords" className="text-brand text-lg font-bold">
        Search by keywords
      </label>
      <div className="flex items-center">
        <input
          type="text"
          name="keywords"
          value={keywords}
          onChange={onKeywordsChange}
          placeholder="Enter keywords to search like 'chicken pasta vegan pizza'"
          className="flex-grow p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-brand transition-colors"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

KeywordInput.displayName = "KeywordInput";

export { KeywordInput };
