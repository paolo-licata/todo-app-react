import React from "react";

const TaskItem = ({ task, toggleTask, deleteTask }) => {

  return (
    <li>
			<label className="custom-checkbox">
			<input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
			<span className="slider"></span>
			</label>      
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
			<span className="task-time">{task.time ? `${task.time}` : ''}</span>
      <button
        className="deleteButton"
        onClick={() => deleteTask(task.id)}
      >
        ❌
      </button>
    </li>
  );
};

export default TaskItem;