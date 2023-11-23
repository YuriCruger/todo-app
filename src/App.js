import React, { useState } from 'react';
import Todo from './components/Todo.js';

function App() {
  const [bgColor, setBgColor] = useState('bg-very_light_grayish_blue');

  const changeBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`h-screen overflow-auto ${bgColor} font-sans`}>
      <Todo changeBgColor={changeBgColor} />
    </div>
  );
}

export default App;
