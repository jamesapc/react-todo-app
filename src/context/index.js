import React from "react";
import uuid from "uuid";

export const StoreContext = React.createContext();

export default function StoreContextProvider(props) {
  // get data from Browser
  const initialState = JSON.parse(localStorage.getItem('todos')) || [] 
  const [todos, setTodos] = React.useState(initialState);

  // send data keep on browser
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
