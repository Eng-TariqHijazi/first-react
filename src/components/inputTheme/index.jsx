import React, { useState } from "react";
import './style.css';
function ChangeTheme() {
  const [theme, setTheme] = useState("Dark");
  const changeTheme = () => {
    setTheme(theme == "Dark" ? "Light" : "Dark");
  };
  return (
    <div className={theme+" theme"}>
      <div className="content">        
          <button className={theme} onClick={changeTheme}>
            {theme}
          </button>
        
      </div>
    </div>
  );
}

export default ChangeTheme;
