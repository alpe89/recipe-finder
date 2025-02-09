import {
  FavouriteList,
  LOCAL_STORAGE_DEFAULT_STATE,
  LOCAL_STORAGE_NAME,
} from "@constants";

const isLocalStorageInitialized = () => {
  const storage = window.localStorage.getItem(LOCAL_STORAGE_NAME);

  return storage !== null;
};

const initializeLocalStorage = () => {
  if (isLocalStorageInitialized()) {
    window.localStorage.setItem(
      LOCAL_STORAGE_NAME,
      JSON.stringify(LOCAL_STORAGE_DEFAULT_STATE)
    );
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: LOCAL_STORAGE_NAME,
        newValue: JSON.stringify(LOCAL_STORAGE_DEFAULT_STATE),
      })
    );
  }

  return;
};

export const getStorageData = () => {
  const storage = window.localStorage.getItem(LOCAL_STORAGE_NAME);

  if (storage === null) {
    initializeLocalStorage();
  }

  return window.localStorage.getItem(LOCAL_STORAGE_NAME);
};

export const getFavouritesList = () => {
  const currentData = getStorageData();

  if (currentData === null) {
    throw new Error("No data found in local storage");
  }

  try {
    const parsed = JSON.parse(currentData);
    return parsed.favourites as FavouriteList;
  } catch {
    return [] as FavouriteList;
  }
};

const saveFavouritesList = (favourites: number[]) => {
  try {
    const currentData = getStorageData();

    if (currentData === null) {
      throw new Error("No data found in local storage");
    }

    const value = JSON.stringify({ ...JSON.parse(currentData), favourites });

    window.localStorage.setItem(LOCAL_STORAGE_NAME, value);
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: LOCAL_STORAGE_NAME,
        newValue: value,
      })
    );
  } catch {
    throw new Error("No data found in local storage");
  }
};

export const isRecipeSaved = (id: number) => {
  const favourites = getFavouritesList();

  return favourites.includes(id);
};

export const saveRecipe = (id: number) => {
  const favourites = getFavouritesList();

  if (favourites.includes(id)) {
    return;
  }

  favourites.push(id);
  saveFavouritesList(favourites);
};

export const removeRecipe = (id: number) => {
  const favourites = getFavouritesList();

  const filteredFavourites = favourites.filter((favourite) => favourite !== id);

  saveFavouritesList(filteredFavourites);
};
