import React from "react";
import { Mycontext } from "../context/StoreContext";
import "../style.css";

export default function Todolist() {
  const [stores] = React.useContext(Mycontext);
  return (
    <div>
      <div className="todo-container">
        {stores.map((store, index) => (
          <ul key={index}>
            {store.day}
            <li>{store.list}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
