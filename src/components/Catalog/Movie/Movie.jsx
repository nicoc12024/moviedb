import "./movie.css";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import Modal from "../../Modal/Modal";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function Movie({ title, release_date, vote_average, poster_path, overview }) {
  const [openModal, setOpenModal] = useState(false);
  const [movie, setSetMovie] = useState({
    title,
    release_date,
    vote_average,
    poster_path,
    overview,
  });

  const [favorite, setFavorite] = useState(false);
  const [watchList, setWatchList] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleWatchList = () => {
    setWatchList(!watchList);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="movie">
      <div className="collection">
        <button onClick={handleWatchList}>
          <BiCameraMovie />
          {watchList === false ? <span>-</span> : <span>+</span>}
        </button>
        <button onClick={handleFavorite}>
          <HiOutlineHeart />
          {favorite === false ? <span>-</span> : <span>+</span>}
        </button>
      </div>
      <div className="data">
        <h2>{title}</h2>
        <div>
          <p>
            <BsCalendar3 />
            {release_date.slice(0, 4)}
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
