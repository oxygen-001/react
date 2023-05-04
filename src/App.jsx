import { useState } from "react";
import './App.css'
export function App() {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(0);
  let time = 0;

  function increment() {
    setCount(count + 1);

    if (count == 16) {
      setNum(num+1)
    }

    console.log(time);

    if (count > 15) {
      return setCount(0);
    }
  }

  function decrement() {
    if (count > 0) {
      return setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <h1>{num}</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={increment}>increment</button>
      <button className="btn" onClick={decrement}>decrement</button>
    </div>
  );
}
