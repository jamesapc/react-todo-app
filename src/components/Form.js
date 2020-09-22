import React from "react";

export default function Form() {
  const [inputText, setInputText] = React.useState("");
  const addTodo = (e) => {
    console.log("clicked");
    setInputText(e.target.value);
  };
  return (
    <div>
      <form action="">
        <button onClick={addTodo}>Add</button>
        <input value={inputText} onChange={setInputText} type="text" />
      </form>
    </div>
  );
}
