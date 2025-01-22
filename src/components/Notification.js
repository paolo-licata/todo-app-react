import React from "react";

const Notification = ({ message, onClose }) => {
	return (
		<div className="overlay">
			<div className="notification-modal">
				<div className="message">{message}</div>
				<button className="close-notification" onClick={onClose}>Close</button>
			</div>
		</div>
	)
}

export default Notification;