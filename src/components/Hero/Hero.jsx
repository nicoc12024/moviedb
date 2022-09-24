import "./hero.css";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { movies } from "../../movies/movies";
import { useEffect, useState } from "react";
import Modal from "./../Modal/Modal";

function Hero() {
  const [id, setId] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const { title, release_date, overview, image, vote_average } = movies[id];
  const handleOpenModal = () => setOpenModal(!openModal);

  useEffect(() => {
    setId(Math.round(Math.random() * (movies.length - 1)));
  }, []);

  return (
    <div
      onClick={handleOpenModal}
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="heroInfo">
        <h1>{title}</h1>
        <div className="data">
          <p>
            <BsCalendar3 />
            {release_date}
          </p>
          <p>
            <AiFillStar className="star" />
            {vote_average}
          </p>
        </div>
        <p className="description">{overview}</p>
      </div>
      {openModal === true && <Modal {...movies[id]} handleClick={handleOpenModal} />}
    </div>
  );
}
export default Hero;
