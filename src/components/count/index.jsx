import React, { useState } from "react";
import "./style.css";
const Count = () => {
  const [count, setCount] = useState(0);
  const handle = (type) => {
    console.log(type);
    if (type === "inc") {
      setCount(count + 1);
    } else {
      if (count != 0) {
        setCount(count - 1);
      }
    }
  };
  
  return (
    <div className="count">
      <div className="container">
        <div className="content">
            <h1>COUNTER</h1>
        <div className="content-count">
          <button onClick={() => handle("inc")}>➕</button>
          <p>{count}</p>
          <button onClick={() => handle("dec")}>➖</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Count;


