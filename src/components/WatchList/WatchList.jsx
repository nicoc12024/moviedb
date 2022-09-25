import "./watchList.css";
import { useContext } from "react";
import { WatchListContext } from "./../../context/index";
import WatchListItem from "./WatchListItem/WatchListItem";

function WishList() {
  const { watchList } = useContext(WatchListContext);
  return (
    <div className="wishList">
      {watchList.length >= 1 ? (
        <div className="container">
          <div className="grid">
            {watchList.map((movie) => (
              <WatchListItem key={movie.id} item={movie} />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="emptyComponent">No movies in here...</h2>
      )}
    </div>
  );
}
export default WishList;
