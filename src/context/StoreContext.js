import React from "react";

export const Mycontext = React.createContext();

const stores = [
  {
    day: "Monday",
    list: "Test all issue",
  },
  {
    day: "Tuesday",
    list: "Run automate test",
  },
  {
    day: "Wednesday",
    list: "Learn React Hooks & Context",
  },
];

export default function StoreContext(props) {
  return (
    <Mycontext.Provider value={[stores]}>{props.children}</Mycontext.Provider>
  );
}
