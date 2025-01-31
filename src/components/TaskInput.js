import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      addTask(task.trim(), time.trim() || null);
      setTask("");
      setTime("");
    } else {
      alert("Please enter a task.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your new task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <button className="submitButton" type="submit">Add</button>
    </form>
  );
};

export default TaskInput;