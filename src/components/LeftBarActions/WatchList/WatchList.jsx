import "./watchList.css";
import { useContext } from "react";
import { WatchListContext } from "../../../context/index";
import SingleMovie from "../ReUsableComponent/SingleMovie";

function WatchList() {
  const { watchList, removeItemFromWatchList } = useContext(WatchListContext);
  return (
    <div className="watchList">
      {watchList.length >= 1 ? (
        <div className="container">
          <div className="grid">
            {watchList.map((movie) => (
              <SingleMovie
                key={movie.id}
                item={movie}
                myButton={removeItemFromWatchList}
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
export default WatchList;
