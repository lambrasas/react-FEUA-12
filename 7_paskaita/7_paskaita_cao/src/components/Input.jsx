import React from "react";
const Input = ({ task, setTask }) => {
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return <input type="text" value={task} onChange={handleChange} />;
};

export default Input;
