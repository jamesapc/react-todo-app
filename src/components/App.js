import React from "react";
import StoreContextProvider from "../context";
import TodoList from "./TodoList.js";
import "../style.css";
import TodoForm from "./TodoForm";

function App() {
  return (
    <StoreContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TodoList />
            <TodoForm />
          </div>
        </div>
      </div>
    </StoreContextProvider>
  );
}

export default App;
