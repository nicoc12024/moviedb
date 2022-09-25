import "./catalog.css";
import { useState, useEffect } from "react";
import Movie from "./Movie/Movie";

function Catalog() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9ab709bb80f81e49d6b700d28370abd0";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const catalogArray = data.results;
        const catalogArrayTrue = catalogArray.map((element) => ({
          ...element,
          isFromCatalog: true,
        }));
        setMovies(catalogArrayTrue);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=9ab709bb80f81e49d6b700d28370abd0&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
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
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default Catalog;
