import { useRef, useState } from "react";
import "./item.css";

export const Item = ({ item, allUseTodo, setAllUseTodo }) => {
  const checkboxRef = useRef();
  const [deletlist, setDeletelist] = useState([...allUseTodo]);
  const handleDeleteClick = (id) => {
    allUseTodo = allUseTodo.filter((item) => item.id !== id);
    setAllUseTodo([...allUseTodo]);
  };

  const edit = (id) => {
    let editText = prompt("Enter edit text", `${item.text}`);
    console.log(editText);
    const newobj = allUseTodo.find((index) => (index.id == id));
    newobj.text = editText;
    setAllUseTodo([...allUseTodo]);
  };

  return (
    <li className="first-li d-flex p-2 justify-content-between mt-5 ms-5 align-items-center border border-bottom-1 border-success-subtle">
      <input ref={checkboxRef} type="checkbox" />
      <span>{item.text}</span>
      <div>
        <button onClick={() => edit(`${item.id}`)} className="btn btn-success">
          Edit
        </button>
        <button
          onClick={() => handleDeleteClick(`${item.id}`)}
          className="btn btn-danger ms-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
