import { useState } from "react";
import { Item } from "../item";

export const List = ({ allUseTodo }) => {
  const [deletlist, setDeletelist] = useState([...allUseTodo]);

  const deleteItem = (id) => {
    setDeletelist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ul className="d-flex flex-column align-items-center">
      {deletlist.map((item) => (
        <Item item={item} key={item.id} deletlist={deletlist} deleteItem={deleteItem} />
      ))}

      
    </ul>
  );
};
