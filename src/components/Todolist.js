import React from "react";
import Todo from "./Todo.js";
import { StoreContext } from "../context";

export default function Todolist() {
  const { todos } = React.useContext(StoreContext);
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
}
