import React from "react";
import { StoreContext } from "../context";

export default function TodoForm() {
  const { addTodo, clearTodo } = React.useContext(StoreContext);
  const [title, setTitle] = React.useState("");
  function handleChange(e) {
    setTitle(e.target.value);
    // console.log(title);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(title);
    setTitle(""); // refrest input field
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={title}
        onChange={handleChange}
        type="text"
        className="todo-input"
      />
      <div>
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
        <button onClick={clearTodo} className="clear-button">
          Clear
        </button>
      </div>
    </form>
  );
}
