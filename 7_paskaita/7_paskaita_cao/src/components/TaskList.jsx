import React from "react";
import SingleTask from "./SingleTask";
import "./TaskList.css";
const TaskList = ({ tasks }) => {
  return (
    <div className="TaskList">
      {tasks.map((task) => (
        <SingleTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
