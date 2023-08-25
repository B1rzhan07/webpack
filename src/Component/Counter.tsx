import React from 'react';
import classes from './Counter.module.scss';
export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>
    </div>
  );
};
