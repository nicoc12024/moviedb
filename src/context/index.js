import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext([]);

export const ContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(() => {
    const localData = localStorage.getItem("watchList");
    return localData ? JSON.parse(localData) : [];
  });

  const [favoriteList, setFavoriteList] = useState(() => {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
  });

  const isInWatchList = (id) => {
    return watchList.some((item) => item.id === id);
  };

  const isInFavorite = (id) => {
    return favoriteList.some((item) => item.id === id);
  };

  const addItemToWatchList = (movie) => {
    if (!isInWatchList(movie.id)) {
      setWatchList([...watchList, movie]);
    } else {
      const newWatchList = watchList.filter((item) => item.id !== movie.id);
      setFavoriteList(newWatchList);
    }
  };

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
    localStorage.setItem("favorites", JSON.stringify(favoriteList));
  }, [watchList, favoriteList]);

  const removeItemFromWatchList = (id) => {
    const newWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(newWatchList);
  };

  const addItemToFavoriteList = (movie) => {
    if (!isInFavorite(movie.id)) {
      setFavoriteList([...favoriteList, movie]);
    } else {
      const newFavoriteList = favoriteList.filter((item) => item.id !== movie.id);
      setFavoriteList(newFavoriteList);
    }
  };

  const removeItemFromFavoriteList = (id) => {
    const newWatchList = favoriteList.filter((movie) => movie.id !== id);
    setFavoriteList(newWatchList);
  };

  return (
    <WatchListContext.Provider
      value={{
        addItemToWatchList,
        removeItemFromWatchList,
        addItemToFavoriteList,
        removeItemFromFavoriteList,
        watchList,
        favoriteList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default ContextProvider;
