// import "./search.css";
// import { useState } from "react";

// function Filters() {
//   const [inputValue, setInputValue] = useState("");
//   const [movies, setMovies] = useState("");

//   const searchMovie = async (e) => {
//     e.preventDefault();

//     try {
//       const url = `https://api.themoviedb.org/3/search/movie?api_key=9ab709bb80f81e49d6b700d28370abd0&query=${inputValue}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setMovies(data.result);
//     } catch (e) {}
//   };

//   const handleInput = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <form className="searchContainer" onSubmit={searchMovie}>
//       <input
//         type="text"
//         name="inputValue"
//         value={inputValue}
//         onChange={handleInput}
//         placeholder="Search movie..."
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }
// export default Filters;
