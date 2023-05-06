import { useRef } from "react";
import "./item.css";

export const Item = ({item, deleteItem }) => {
  const checkboxRef = useRef();


  const handleDeleteClick = () => {
    deleteItem(item.id);
  };

  return (
    <li className="first-li d-flex p-2 justify-content-between mt-5 ms-5 align-items-center border border-bottom-1 border-success-subtle">
      <input ref={checkboxRef} type="checkbox" onChange={handleCheckboxChange} />
      <span>{item.text}</span>
      <div>
        <button className="btn btn-success">Edit</button>
        <button onClick={handleDeleteClick} className="btn btn-danger ms-2">
          Delete
        </button>
      </div>
    </li>
  );
};
