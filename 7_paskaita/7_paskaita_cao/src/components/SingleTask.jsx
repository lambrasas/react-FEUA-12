import React from "react";
import "../components/SingleTask.css";
const SingleTask = ({ task }) => {
  return (
    <div className="singleTask">
      <p>{task.name}</p>
      <button key={task.id}>X</button>
    </div>
  );
};

export default SingleTask;
