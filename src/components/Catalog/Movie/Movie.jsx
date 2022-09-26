import "./movie.css";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { useState, useContext } from "react";
import { WatchListContext } from "./../../../context/index";
import Modal from "../../Modal/Modal";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function Movie({ movie: movieInfo }) {
  const {
    addItemToWatchList,
    removeItemFromWatchList,
    addItemToFavoriteList,
    removeItemFromFavoriteList,
  } = useContext(WatchListContext);

  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState(movieInfo);

  const [favorite, setFavorite] = useState(false);
  const [watchList, setWatchList] = useState(false);

  const handleOpenModal = () => setOpenModal(!openModal);

  const handleWatchList = () => {
    setWatchList(!watchList);
    if (watchList) {
      removeItemFromWatchList(movie.id);
    } else {
      addItemToWatchList(movie);
    }
  };

  const handleFavoriteList = () => {
    setFavorite(!favorite);
    if (favorite) {
      removeItemFromFavoriteList(movie.id);
    } else {
      addItemToFavoriteList(movie);
    }
  };

  const { title, release_date, vote_average, poster_path } = movie;

  return (
    <div className="movie">
      <div className="collection">
        <button onClick={handleWatchList}>
          <BiCameraMovie />
          {watchList ? <span>-</span> : <span>+</span>}
        </button>
        <button onClick={handleFavoriteList}>
          <HiOutlineHeart />
          {favorite ? <span>-</span> : <span>+</span>}
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
export default Movie;
