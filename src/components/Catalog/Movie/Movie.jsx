import "./movie.css";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { useState, useContext, useEffect } from "react";
import { WatchListContext } from "./../../../context/index";
import Modal from "../../Modal/Modal";
import NotificationContext from "../../../context/Notification/notification";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function Movie({ movie: movieInfo }) {
  const {
    addItemToWatchList,
    removeItemFromWatchList,
    addItemToFavoriteList,
    removeItemFromFavoriteList,
    watchList,
    favoriteList,
  } = useContext(WatchListContext);

  const { setNotification } = useContext(NotificationContext);

  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState(movieInfo);

  const [isFavorite, setFavorite] = useState(false);
  const [isWatchList, setWatchList] = useState(false);

  const handleOpenModal = () => setOpenModal(!openModal);

  useEffect(() => {
    setFavorite(favoriteList?.some((f) => f.id === movie.id));
    setWatchList(watchList?.some((f) => f.id === movie.id));
  }, [isFavorite, isWatchList]);

  const handleWatchList = () => {
    setWatchList(!isWatchList);
    if (isWatchList) {
      //
      removeItemFromWatchList(movie.id);
    } else {
      setNotification("Película agregada", "correcto", "movieToWatchList");
      addItemToWatchList(movie);
    }
  };

  const handleFavoriteList = () => {
    setFavorite(!isFavorite);
    if (isFavorite) {
      //
      removeItemFromFavoriteList(movie.id);
    } else {
      setNotification("Película agregada a Favoritos", "correcto", "movieToFavorite");
      addItemToFavoriteList(movie);
    }
  };

  const { title, release_date, vote_average, poster_path } = movie;

  return (
    <div className="movie">
      <div className="collection">
        <button onClick={handleWatchList}>
          <BiCameraMovie />
          {isWatchList ? <span>-</span> : <span>+</span>}
        </button>
        <button onClick={handleFavoriteList}>
          <HiOutlineHeart />
          {isFavorite ? <span>-</span> : <span>+</span>}
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
