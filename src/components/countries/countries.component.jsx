import "../header/header.css";
import germany from "./germany.svg";
import "./countries.css";
import { useEffect, useState } from "react";

export const Countries = ({ allData, setAllData }) => {
  // const [allData, setAllData] = useState([]);
  function getData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllData((prev) => [...prev, ...data]);
        console.log(allData);
      })
      .catch((err) => console.log(err));

    console.log(allData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="for_big_flex">
        {allData.map((item, i) => (
          <div key={i} className="for_countries_cards">
            <img src={item.flags.svg} alt="" />

            <h2>{item.name.common}</h2>

            <p>
              <b>Population :</b> {item.population}
            </p>
            <p>
              <b>Region :</b> {item.continents}
            </p>
            <p className="last_p">
              <b>Capital :</b> {item.capital}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
