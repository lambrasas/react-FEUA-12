import React from "react";
const SingleTask = ({ task }) => {
  return (
    <div>
      <p>{task.name}</p>
      <button onClick={deleteTask} key={task.id}>
        X
      </button>
    </div>
  );
};

export default SingleTask;
