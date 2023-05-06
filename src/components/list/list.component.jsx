import { useState } from "react";
import { Item } from "../item";

export const List = ({ allUseTodo ,setAllUseTodo}) => {
  



  return (
    <ul className="d-flex flex-column align-items-center">
      {allUseTodo.map((item) => (
        <Item item={item} key={item.id} setAllUseTodo={setAllUseTodo} allUseTodo={allUseTodo}  />
      ))}

      
    </ul>
  );
};
