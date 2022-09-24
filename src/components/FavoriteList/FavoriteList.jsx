import "./favoriteList.css";
import { useContext } from "react";
import { WatchListContext } from "../../context/index";
import FavoriteItem from "./FavoriteItem/FavoriteItem";

function FavoriteList() {
  const { wishList } = useContext(WatchListContext);
  return (
    <div className="wishList">
      {wishList.length > 1 ? (
        <div className="container">
          <div className="grid">
            {wishList.map((movie) => (
              <FavoriteItem key={movie.id} item={movie} />
            ))}
          </div>
        </div>
      ) : (
        <h2>No movies in here...</h2>
      )}
    </div>
  );
}
export default FavoriteList;
