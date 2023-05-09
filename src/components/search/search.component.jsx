import { useRef } from "react";
import "../header/header.css";
import "./search.css";

export const Search = ({ allData, setAllData }) => {
  let input = useRef();
  let selectRef = useRef();

  function search(e) {
    console.log(input.current.value);
    e.preventDefault();

    fetch(`https://restcountries.com/v3.1/name/${input.current.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (input.current.value !== "") {
          return setAllData(data);
        }
      })
      .catch((err) => console.log(err));

    console.log(selectRef.current.value);
  }

  function region(e) {
    console.log(e);
    fetch(`https://restcountries.com/v3.1/region/${selectRef.current.value}`)
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.log(err));
    console.log(selectRef.current.value);
  }

  return (
    <div className="container">
      <div className="search_div">
        <form onChange={search} action="search">
          <input
            ref={input}
            placeholder="Search For Countries..."
            type="text"
          />
        </form>

        <select ref={selectRef} onChange={region}>
          <option value="filter by region ">Filter By Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
