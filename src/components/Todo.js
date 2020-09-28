import React from "react";

export default function Todo({ todo }) {
  return (
    <li className="todo-item">
      <span>{todo.title}</span>
      <div>
        <button className="delete-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}
