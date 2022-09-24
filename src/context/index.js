import { createContext, useState } from "react";

export const WatchListContext = createContext([]);

export const ContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const addWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };
  const removeWatchList = (id) => {
    const newWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(newWatchList);
  };

  const addWishList = (movie) => {
    console.log(wishList);
    setWishList([...wishList, movie]);
  };

  const removeWishList = (id) => {
    const newWatchList = wishList.filter((movie) => movie.id !== id);
    setWishList(newWatchList);
  };

  return (
    <WatchListContext.Provider
      value={{
        addWatchList,
        removeWatchList,
        addWishList,
        removeWishList,
        watchList,
        wishList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default ContextProvider;
