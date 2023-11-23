// Todo.js
import React, { useState } from 'react';
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';
import Create from './Create';
import Items from './Items';
import Header from './Header';

export default function Todo(props) {
    const [inputValue, setInputValue] = useState('');
    const [sentValue, setSentValue] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [filter, setFilter] = useState('All');

    const onSend = (value) => {
        setSentValue(value);
    };

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
        props.changeBgColor(darkMode ? 'bg-very_light_grayish_blue' : 'bg-very_dark_blue');
    };

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const buttonIcon = darkMode ? Sun : Moon;

    return (
        <div>
            <Header darkMode={darkMode} />

            <div className='relative flex flex-col mx-10 z-10 md:mx-32 lg:mx-60 xl:mx-96'>
                <div className='-mt-48 mb-10 flex items-center justify-between'>
                    <h1 className='text-very_light_gray font-bold text-3xl tracking-widest'>TODO</h1>
                    <button onClick={handleDarkModeToggle} id='dark/light'>
                        <img src={buttonIcon} className='h-6' alt='Moon' />
                    </button>
                </div>

                <Create setInputValue={setInputValue} inputValue={inputValue} darkMode={darkMode} onSend={onSend} />

                <div className={`flex flex-col mt-6 mb-6 h-2/4 rounded-lg shadow-2xl overflow-auto ${darkMode ? 'bg-very_dark_desaturated_blue' : 'bg-white'}`}>
                    <Items sentValue={sentValue} darkMode={darkMode} filter={filter} onFilterChange={handleFilterChange} />
                </div>

                <div className={`py-4 rounded-lg shadow-2xl md:hidden ${darkMode ? 'bg-very_dark_desaturated_blue' : 'bg-white'}`}>
                    <div className='flex items-center justify-center gap-6 font-bold'>
                        <button onClick={() => handleFilterChange('All')} className='text-bright_blue cursor-pointer'>All</button>
                        <button onClick={() => handleFilterChange('Active')} className='text-dark_grayish_blue hover:text-very_dark_grayish_blue cursor-pointer'>Active</button>
                        <button onClick={() => handleFilterChange('Completed')} className='text-dark_grayish_blue hover:text-very_dark_grayish_blue cursor-pointer'>Completed</button>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-10 mb-10 text-dark_grayish_blue font-medium text-sm'>
                    <p className='md:text-lg'>Drag and drop to reorder list</p>
                </div>
            </div>
        </div>
    );
}
