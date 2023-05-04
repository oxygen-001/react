import { useState } from "react";
import "./App.css";


export function App() {
  const [allInformation, setAllInformation] = useState([]);

  function save(e) {
    e.preventDefault();
    let input = document.querySelector(".mainInput");
    console.log(input.value);
    let id = !allInformation.at(-1) ? 0 : allInformation.at(-1).id;

    const saveObject = {
      text: input.value,
      id: id+1,
    };

    setAllInformation((prev) => [...prev, saveObject]);
    console.log(saveObject);
  }

  console.log(allInformation);

  return (
    <div className=".container">
      <form onSubmit={save} className="firstForm" action="save">
        <input
          className="mainInput"
          type="text"
          placeholder="Enter your plan"
        />

        <button className="saveButton">Save</button>
      </form>

      <ul className="firstUl">
        {allInformation.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
