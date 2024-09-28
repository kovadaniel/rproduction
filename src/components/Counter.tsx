import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => 
    setCount(count + 1);

  const handleSubtract = () => 
    setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
      </div>
    </div>
  );
}
 