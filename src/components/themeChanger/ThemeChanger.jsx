import React from 'react'
import "./theme.css"

//props from Dashboard
const ThemeChanger = ({ color, onCircleClick }) => {
    const handleClick = () => {
        onCircleClick(color);
    };
    
    return (
        <div
          className="circle"
          style={{ backgroundColor: color }}
          onClick={handleClick}
        ></div>
      );
    };

export default ThemeChanger