// Items.js
import React, { useState, useEffect } from 'react';
import Checked from '../images/icon-check.svg';
import Xis from '../images/icon-cross.svg';
import { v4 as uuidv4 } from 'uuid';

export default function Items(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    if (props.sentValue.trim() !== '') {
      const newTask = { id: uuidv4(), text: props.sentValue, isChecked: false };
      setTasks((prevTasks) => {
        const updatedTasks = [newTask, ...prevTasks];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    }
  }, [props.sentValue]);

  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    localStorage.setItem('tasks', JSON.stringify(tasks.filter((task) => task.id !== taskId)));
  };

  const completeDeleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isChecked));
    localStorage.setItem('tasks', JSON.stringify(tasks.filter((task) => !task.isChecked)));
  };

  const remainingTasks = tasks.filter((task) => !task.isChecked);

  const showOnlyAll = () => {
    props.onFilterChange('All');
  };
  
  const showOnlyActive = () => {
    props.onFilterChange('Active');
  };
  
  const showOnlyCompleted = () => {
    props.onFilterChange('Completed');
  };

const filteredTasks = props.filter === 'Active' ? remainingTasks : (props.filter === 'Completed' ? tasks.filter((task) => task.isChecked) : tasks);

  return (
    <div className={`flex flex-col min-h-[360px] md:h-[600px] divide-y-[1px] divide-light_grayish_blue ${props.darkMode ? 'divide-very_dark_grayish_blue' : ''}`}>
      {filteredTasks.map((task) => (
        <div key={task.id} className={`p-4 flex items-center ${props.darkMode ? 'bg-very_dark_desaturated_blue' : 'bg-white'}`}>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id={task.id}
              className='hidden'
              checked={task.isChecked}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <label
              htmlFor={task.id}
              className={`w-6 h-6 rounded-full cursor-pointer flex items-center justify-center mr-4 ${task.isChecked
                ? 'bg-gradient-to-br from-check_bg1 to-check_bg2'
                : 'border border-dark_grayish_blue'
                }`}
            >
              <img src={Checked} alt='checked' className={`${task.isChecked ? 'block' : 'hidden'}`} />
            </label>
            <span
              className={`text-sm font-medium ${props.darkMode
                ? 'text-light_grayish_blue hover:text-light_grayish_blue_hover'
                : ''
                } ${task.isChecked
                  ? `line-through text-dark_grayish_blue ${props.darkMode ? 'text-very_dark_grayish_blue' : ''
                  }`
                  : ''
                }`}
            >
              {task.text}
            </span>
          </div>
          <button className='ml-auto' onClick={() => handleDelete(task.id)}>
            <img src={Xis} alt='delete' />
          </button>
        </div>
      ))}
      <div className={`flex mt-auto py-4 px-6 items-center justify-between text-sm text-dark_grayish_blue font-medium ${props.darkMode ? 'bg-very_dark_desaturated_blue' : ''}`}>
        <p>{remainingTasks.length} Items left</p>
        <div className={`py-4 rounded-lg max-md:hidden ${props.darkMode ? 'bg-very_dark_desaturated_blue' : 'bg-white'}`}>
          <div className='flex items-center justify-center gap-6 font-bold'>
            <button onClick={() => props.onFilterChange('All')} className='text-bright_blue cursor-pointer'>All</button>
            <button onClick={() => props.onFilterChange('Active')} className='text-dark_grayish_blue hover:text-very_dark_grayish_blue cursor-pointer'>Active</button>
            <button onClick={() => props.onFilterChange('Completed')} className='text-dark_grayish_blue hover:text-very_dark_grayish_blue cursor-pointer'>Completed</button>
          </div>
        </div>
        <button onClick={completeDeleted}>Clear Completed</button>
      </div>
    </div>
  );
}
