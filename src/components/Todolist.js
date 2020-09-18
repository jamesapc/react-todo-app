import React from "react";
import { Mycontext } from "../context/StoreContext";

export default function Todolist() {
  const [stores] = React.useContext(Mycontext);
  return (
    <div>
      {stores.map((store, index) => (
        <ul key={index}>
          {store.day}
          <li>{store.list}</li>
        </ul>
      ))}
    </div>
  );
}
