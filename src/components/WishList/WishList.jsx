import "./wishList.css";
import { useContext } from "react";
import { WatchListContext } from "./../../context/index";

function WishList() {
  const { watchList, addWatchList, removeWatchList } = useContext(WatchListContext);
  const { title, overview } = watchList[0];
  return (
    <div className="wishList">
      <div className="item">
        <p>{title}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
}
export default WishList;
