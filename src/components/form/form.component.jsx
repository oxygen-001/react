import { useRef } from "react";
import { v4 as uuid } from "uuid";

export const Form = ({ setAllUseTodo }) => {
  const inputRef = useRef();

  const createTodo = (e) => {
    let text = inputRef.current.value;
    e.preventDefault();
    
    

    let newTodo = {
      id: uuid(),
      text,
      isCompleted: false,
    };

    setAllUseTodo((prev) => [...prev, newTodo]);
    inputRef.current.value=null
  };
  return (
    <form
      className="mx-auto w-50  d-flex mt-5"
      onSubmit={createTodo}
      action="save"
    >
      <input
        ref={inputRef}
        className="form-control"
        placeholder="To do text"
        type="text"
        required
      />
      <button className="btn btn-success ms-3">Add</button>
    </form>
  );
};
