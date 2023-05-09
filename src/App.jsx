import { useRef, useState } from "react";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Countries } from "./components/countries";

// import "./App.css";

export function App() {


  const [allData, setAllData] = useState([]);
  return (
    <>
      <Header />
      <Search allData={allData} setAllData={setAllData}/>
      <Countries allData={allData} setAllData={setAllData}/>
    </>
  );
}
