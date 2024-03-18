import React, { useState } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const InputContainer = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input task={task} setTask={setTask} />
      <SubmitButton />
    </form>
  );
};

export default InputContainer;
