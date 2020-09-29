import React from "react";
import { StoreContext } from "../context";

export default function Todo({ todo }) {
  const { removeTodo } = React.useContext(StoreContext);
  return (
    <li className="todo-item">
      <span>{todo.title}</span>
      <div className="buttons">
        <button className="delete-btn">
          <i
            onClick={() => removeTodo(todo.id)}
            className="fas fa-trash-alt"
          ></i>
        </button>
      </div>
    </li>
  );
}
