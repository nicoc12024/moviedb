import { createContext, useState } from "react";

export const WatchListContext = createContext([]);

export const ContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const addItemToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeItemFromWatchList = (id) => {
    const newWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(newWatchList);
  };

  const addItemToFavoriteList = (movie) => {
    setFavoriteList([...favoriteList, movie]);
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
