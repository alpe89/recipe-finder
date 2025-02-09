import { useSyncExternalStore } from "react";
import { getStorageData } from "@favourites";
import { LOCAL_STORAGE_DEFAULT_STATE } from "@constants";

export const useFavourites = () => {
  const subscribe = (listener: () => void) => {
    window.addEventListener("storage", listener);
    return () => void window.removeEventListener("storage", listener);
  };

  const store = useSyncExternalStore(subscribe, getStorageData);

  const favouritesList =
    JSON.parse(store ?? JSON.stringify(LOCAL_STORAGE_DEFAULT_STATE))
      .favourites ?? [];

  return { favouritesList } as const;
};
