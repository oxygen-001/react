import { useRef, useState } from "react";
import { Form } from "./components/form";
import { List } from "./components/list";
// import "./App.css";

export function App() {
  const [allUseTodo, setAllUseTodo] = useState([]);
  console.log(allUseTodo);
  return (
    <div className="container">
      <Form setAllUseTodo={setAllUseTodo} />
        <List allUseTodo={allUseTodo}/>
    </div>
  );
}
