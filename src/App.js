import React from 'react';
import StoreContext from './context/StoreContext';
import Todolist from './components/Todolist';

function App() {
  return (
    <StoreContext>
      <Todolist/>
    </StoreContext>
  );
}

export default App;
