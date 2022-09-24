import "./filters.css";
import { useState } from "react";

import Select from "react-select";

function Filters() {
  const [genre, setGenre] = useState("Filter By Genre");
  const [by, setBy] = useState("");
  const [year, setYear] = useState("");
  const options = [
    { label: "C++", value: "C++" },
    { label: "JAVA", value: "JAVA" },
    { label: "Javascript", value: "Javascript" },
    { label: "Python", value: "Python" },
    { label: "Swift", value: "Swift" },
  ];

  const handleGenre = (value) => {
    setGenre(value);
  };
  const handleBy = (e) => {
    setBy(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="filtersContainer">
      <div className="filters">
        <Select
          defaultValue={{ label: "Filter by genre", value: "Filter by genre" }}
          options={options}
          onChange={handleGenre}
        />
        {/* <select value={year} onChange={handleYear} defaultValue={"0"}>
          <option value="0" hidden>
            Filter By Year
          </option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
        </select>
        <select value={by} onChange={handleBy} defaultValue={"0"}>
          <option value="0" hidden>
            Order By
          </option>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select> */}
      </div>
    </div>
  );
}
export default Filters;
