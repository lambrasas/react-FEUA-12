import React from "react";
import TaskList from "./TaskList";
import InputContainer from "./InputContainer";
import "./TaskTable.css";
const TaskTable = ({ tasks, addTask }) => {
  return (
    <div className="TaskTable">
      <h1>You have {tasks.length} todos</h1>
      <div className="InputAndList">
        <InputContainer addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskTable;
