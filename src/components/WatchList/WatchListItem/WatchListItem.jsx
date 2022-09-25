import "./watchListItem.css";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useState, useContext } from "react";
import { WatchListContext } from "../../../context/index";
import Modal from "../../Modal/Modal";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

function WishListItem({ item }) {
  const { removeItemFromWatchList } = useContext(WatchListContext);

  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState(item);

  const handleOpenModal = () => setOpenModal(!openModal);

  const removeItemWatchList = () => {
    removeItemFromWatchList(movie.id);
  };

  const { title, release_date, vote_average, poster_path } = item;

  return (
    <div className="movieWishList">
      <div className="collection">
        <button onClick={removeItemWatchList}>
          <TiDeleteOutline />
        </button>
      </div>
      <div className="data">
        <h2>{title}</h2>
        <div>
          <p>
            <BsCalendar3 />
            {release_date}
          </p>
          <p>
            <AiFillStar className="star" />
            {vote_average}
          </p>
        </div>
        <button className="btn" onClick={handleOpenModal}>
          Read more...
        </button>
      </div>
      <img src={API_IMG + poster_path} alt="movie cover" />
      {openModal === true && <Modal {...movie} handleClick={handleOpenModal} />}
    </div>
  );
}
export default WishListItem;
