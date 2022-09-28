import "./genreContainer.css";
import { useEffect, useState, useContext } from "react";
import { WatchListContext } from "../../../context/index";
import SingleOption from "./../SinlgeOption/SingleOption";
import Movie from "./../../Catalog/Movie/Movie";

function GenreContainer() {
  const { setShowResults, showResults, setMoviesByGenre, moviesByGenre } =
    useContext(WatchListContext);

  const [genres, setGenres] = useState([]);

  const API_URL_GENRE =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=9ab709bb80f81e49d6b700d28370abd0&language=en-US";

  useEffect(() => {
    setShowResults(true);

    fetch(API_URL_GENRE)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
        setMoviesByGenre(data.genres);
      });
  }, []);

  return (
    <div className="genreContent">
      <h2 className="genreTitle">Search by genre</h2>
      {showResults ? (
        <div className="genreContainer ">
          {genres.map((genre) => (
            <SingleOption key={genre.id} name={genre.name} genreId={genre.id} />
          ))}
        </div>
      ) : (
        <div className="container">
          <div className="grid">
            {moviesByGenre.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GenreContainer;
