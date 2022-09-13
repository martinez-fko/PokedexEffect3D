import React, { useState } from "react";
import "../assets/css/dropdown.css";

const Dropdown = ({ options, selected, clic ,size }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`dropdown ${isActive && "active"}`}
      onClick={() => setIsActive(!isActive)}
      style={{width:size}}
    >
      <input type="text" className="text02" readOnly value={selected} />
      <div className="option">
        {options.map((option) => (
          <div key={option.id} onClick={() => clic(option.name, option.id)}>
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
