import React from "react";
import StoreContextProvider from "../context";
import TodoList from "./TodoList.js";
import "../style.css";
import TodoForm from "./TodoForm";

function App() {
  return (
    <StoreContextProvider>
      <div>
        <TodoList />
        <TodoForm />
      </div>
    </StoreContextProvider>
  );
}

export default App;
