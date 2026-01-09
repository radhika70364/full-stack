import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTaskList([...taskList, task]); // allows one or more tasks
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  return (
    <div className="container">
      <h2>To-Do List SPA</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
