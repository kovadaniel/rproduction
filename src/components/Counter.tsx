import { useState } from "react";
import classes from "./Counter.module.scss";

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
        <button onClick={handleAdd} className={classes.btn}>+</button>
        <button onClick={handleSubtract} className={classes.btn}>-</button>
      </div>
    </div>
  );
}
 