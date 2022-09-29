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
                myButton={removeItemFromFavoriteList}
              />
            ))}
          </div>
        </div>
      ) : (
        <h3 className="messageComponent">No movies in here...</h3>
      )}
    </div>
  );
}
export default FavoriteList;
