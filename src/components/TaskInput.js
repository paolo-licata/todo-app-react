import React, { useState } from "react";

const TaskInput = ({ addTask}) => {
	const [task, setTask] = useState("");
	
	const handleSubmit = (event) => {
		event.preventDefault();

		if (task.trim()) {
			addTask(task.trim());
			setTask("");
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
			<button className="submitButton" type="submit">Add</button>
		</form>
	);
};

export default TaskInput;