import "./catalog.css";
import { useState, useEffect } from "react";
import Movie from "./Movie/Movie";
import Spinner from "./Spinner/Spinner";

function Catalog() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [movieNotFound, setMovieNotFound] = useState(false);

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9ab709bb80f81e49d6b700d28370abd0";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    if (query.length > 0) {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=9ab709bb80f81e49d6b700d28370abd0&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.total_results === 0) {
          setMovieNotFound(true);
          setMovies(data.results);
        } else {
          setMovieNotFound(false);
          setMovies(data.results);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="catalog">
      <form className="searchContainer" onSubmit={searchMovie}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleInput}
          placeholder="Search movie..."
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 ? (
        <div className="container">
          <div className="grid">
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ) : movieNotFound ? (
        <div className="notFound">
          <p>Your search for "{query}" did not have any matches.</p>
          <p>Suggestions:</p>
          <ul>
            <li>- Try other keywords</li>
          </ul>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
export default Catalog;
