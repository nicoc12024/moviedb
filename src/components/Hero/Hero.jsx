import "./hero.css";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { movies } from "../../movies/movies";
import { useEffect, useState } from "react";
import Catalog from "./Catalog/Catalog";

function Hero() {
  const [id, setId] = useState(0);

  const { title, release_date, overview, poster_path, vote_average } = movies[id];

  useEffect(() => {
    setId(Math.round(Math.random() * (movies.length - 1)));
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${poster_path})`,
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
      <Catalog />
    </div>
  );
}
export default Hero;
