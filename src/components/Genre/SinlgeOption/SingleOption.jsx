import "./singleOption.css";
import { useContext } from "react";
import { WatchListContext } from "../../../context/index";

function SingleOption({ name, genreId }) {
  const { searchByGenre } = useContext(WatchListContext);

  return (
    <div className="singleOption" onClick={() => searchByGenre(genreId)}>
      {name}
    </div>
  );
}
export default SingleOption;
