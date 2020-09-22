import React from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import StoreContext from "./context/StoreContext";
import "./style.css";

function App() {
  return (
    <div>
      <StoreContext>
        <Todolist />
        <Form />
      </StoreContext>
    </div>
  );
}

export default App;
