import React from "react";
import SingleTask from "./SingleTask";
const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <SingleTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
