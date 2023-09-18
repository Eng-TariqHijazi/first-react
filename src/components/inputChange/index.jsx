import React, { useState } from "react";
import Input from "../input";
import "./style.css";
function InputChange() {
  const [value, setValue] = useState("");

  const change = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="change">
      <div className="content">
        <h1>Input OnChange</h1>
        <h2>Text: {value}</h2>
        <input
          placeholder="Enter the text"
          type="text"
          value={value}
          onChange={change}
        />
      </div>
    </div>
  );
}

export default InputChange;
