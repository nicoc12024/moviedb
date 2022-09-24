import "./catalog.css";
import { useState, useEffect } from "react";
import Movie from "./Movie/Movie";

function Catalog() {
  const [movies, setMovies] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9ab709bb80f81e49d6b700d28370abd0";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="catalog">
      {movies.length > 0 ? (
        <div className="container">
          <div className="grid">
            {movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default Catalog;
