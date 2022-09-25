import { useContext } from "react";
import { WatchListContext } from "../../../context/index";
import SingleMovie from "../ReUsableComponent/SingleMovie";

function FavoriteList() {
  const { favoriteList, removeItemFromFavoriteList } = useContext(WatchListContext);
  return (
    <div className="watchList">
      {favoriteList.length >= 1 ? (
        <div className="container">
          <div className="grid">
            {favoriteList.map((movie) => (
              <SingleMovie
                key={movie.id}
                item={movie}
                myButon={removeItemFromFavoriteList}
              />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="emptyComponent">No movies in here...</h2>
      )}
    </div>
  );
}
export default FavoriteList;
