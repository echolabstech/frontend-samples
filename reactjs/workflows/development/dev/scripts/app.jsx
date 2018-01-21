import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./todo.jsx";

const mountpoint = document.querySelector('#mount-point')
ReactDOM.render(
	<TodoApp />,
	mountpoint
);