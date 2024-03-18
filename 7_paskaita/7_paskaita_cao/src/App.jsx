import React, { useState } from "react";
import TaskTable from "./components/TaskTable";
import { task } from "./models/task.js";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskName) => {
    const newTask = new task(taskName);
    setTasks((prevTask) => [...prevTask, newTask]);
  };
  return (
    <div>
      <TaskTable tasks={tasks} addTask={addTask} />
    </div>
  );
};

export default App;
