import React from "react";
import uuid from "uuid";

export const StoreContext = React.createContext();

export default function StoreContextProvider(props) {
  const [todos, setTodos] = React.useState([
    { title: "Read a books", id: 1 },
    { title: "Check all issue", id: 2 },
    { title: "Finish work before 5:00 pm", id: 3 },
  ]);

  function addTodo(title) {
    // [title] mean create {title: ""} and add to state
    setTodos([...todos, { title, id: uuid.v4() }]);
  }
  function clearTodo() {
    setTodos([]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <StoreContext.Provider value={{ todos, addTodo, clearTodo, removeTodo }}>
      {props.children}
    </StoreContext.Provider>
  );
}
