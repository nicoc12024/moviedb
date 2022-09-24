import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext([]);

export const ContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addWatchList = (movie) => {
    setWatchList([...watchList, movie]);
    console.log(movie);
    console.log(watchList);
  };

  const removeWatchList = (id) => {
    const newWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(newWatchList);
  };

  return (
    <WatchListContext.Provider
      value={{
        addWatchList,
        removeWatchList,
        watchList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default ContextProvider;
