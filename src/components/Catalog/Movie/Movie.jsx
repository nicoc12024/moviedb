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
  const { addItemToWatchList, addItemToFavoriteList } = useContext(WatchListContext);

  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState(movieInfo);

  // const [favorite, setFavorite] = useState(false);
  // const [watchList, setWatchList] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const handleOpenModal = () => setOpenModal(!openModal);

  // const addToLocalStorage = (key) => {
  //   let array = JSON.parse(localStorage.getItem(key));
  //   array.push(movie);
  //   // localStorage.setItem(key, JSON.stringify(array));
  //   key === "favorites" ? addItemToFavoriteList(...array) : addItemToWatchList(...array);
  // };

  // const removeFromLocalStorage = (key) => {
  //   let array = JSON.parse(localStorage.getItem(key));
  //   array = array.filter((m) => m.id !== movie.id);
  //   // localStorage.setItem(key, JSON.stringify(array));
  //   key === "favorites" ? addItemToFavoriteList(array) : addItemToWatchList(array);
  // };

  const handleClick = (key) => {
    if (key === "favorites") {
      if (isFavorite) {
        // Maneja + or -
        setIsFavorite(false);
      } else {
        // Maneja + or -
        setIsFavorite(true);
        movie.isfavorite = true;
        addItemToFavoriteList(movie);
      }
    } else {
      if (isInWatchlist) {
        setIsInWatchlist(false);
      } else {
        setIsInWatchlist(true);
        movie.isWatchList = true;
        addItemToWatchList(movie);
      }
    }
  };

  const { title, release_date, vote_average, poster_path } = movie;

  return (
    <div className="movie">
      <div className="collection">
        <button onClick={() => handleClick("watchlist")}>
          <BiCameraMovie />
          {isInWatchlist ? <span>-</span> : <span>+</span>}
        </button>
        <button onClick={() => handleClick("favorites")}>
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
