import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import "./App.css";

const App = () => {
  // Initializes tasks from localStorage if already entered some
  // or defaults to an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Saves tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Adds a new task to the list
  const addTask = (text, time) => {
    const newTask = { id: Date.now(), text, time, completed: false }
    setTasks([...tasks, newTask]);

    if (time) {
      setAlarm(newTask) //Only sets an alarm whenever time is provided
    }
  };

  //toggle task for completed and not-completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setAlarm = (task) => {
    if (!task.time) return;
    
    const [hours, minutes] = task.time.split(":").map(Number);
    const now = new Date();
    const alarmTime = new Date(
      now.getFullYear(),
      now.getMonth,
      now.getDate(),
      hours,
      minutes
    );

    const delay = alarmTime - now; //this calculates the time difference

    if (delay > 0) {
      setTimeout(() => {
        alert('Reminder: ${task.text}')
      }, delay);
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

