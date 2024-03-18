import React from "react";
import TaskList from "./TaskList";
import InputContainer from "./InputContainer";
const TaskTable = ({ tasks, addTask }) => {
  return (
    <div>
      <h1>You have {tasks.length} todos</h1>
      <TaskList tasks={tasks} />
      <InputContainer addTask={addTask} />
    </div>
  );
};

export default TaskTable;
