import "./modal.css";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

function Modal({
  title,
  release_date,
  vote_average,
  poster_path,
  image,
  overview,
  handleClick,
}) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="modal">
      <div className="img">
        <img
          src={API_IMG && poster_path ? API_IMG + poster_path : image}
          alt="movie cover"
        />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <div className="icons">
          <p>
            <BsCalendar3 />
            {release_date}
          </p>
          <p>
            <AiFillStar className="star" />
            {vote_average}
          </p>
        </div>
        <div className="overview">
          <p>{overview}</p>
        </div>
        <div className="closeBtn" onClick={handleClick}>
          Close
        </div>
      </div>
    </div>
  );
}

export default Modal;
