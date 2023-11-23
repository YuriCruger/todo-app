import React, { useState } from 'react';

export default function Create(props) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      props.onSend(props.inputValue);
      props.setInputValue('');
    }
  };

  return (
    <div className={`py-4 px-4 rounded-lg shadow ${props.darkMode ? 'bg-very_dark_desaturated_blue' : 'bg-white'}`}>
      <div className="flex items-center">
        <label
          className='w-6 h-6 border border-dark_grayish_blue rounded-full cursor-pointer flex items-center justify-center mr-4'
          onClick={handleKeyDown}
          role="button"
        ></label>
        <input
          id='createTodo'
          type='text'
          className={`w-full text-dark_grayish_blue font-medium text-sm outline-none focus:ring-0 ${props.darkMode ? 'bg-very_dark_desaturated_blue' : ''}`}
          placeholder='Create a new todo...'
          value={props.inputValue}
          onKeyDown={handleKeyDown}
          onChange={(e) => props.setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}
