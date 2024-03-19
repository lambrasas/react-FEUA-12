import React from "react";
import "./Input.css";
const Input = ({ task, setTask }) => {
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <input className="input" type="text" value={task} onChange={handleChange} />
  );
};

export default Input;
