import "./genreContainer.css";
import { useEffect, useState } from "react";
import SingleOption from "./../SinlgeOption/SingleOption";


function GenreContainer() {
  const [genres, setGenres] = useState([]);
  const API_URL_GENRE =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=9ab709bb80f81e49d6b700d28370abd0&language=en-US";

  useEffect(() => {
    fetch(API_URL_GENRE)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);

  return (
    <div className="filter-container">
      {genres.map((genre) => (
        <SingleOption key={genre.id} name={genre.name} genreId={genre.id} />
      ))}
    </div>
  );
}

export default GenreContainer;
