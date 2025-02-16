import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

export default function InputSearch() {
    const [inputValue, setInputValue] = useState('');
    const { setTitleMovie } = useContext(MovieContext); // Получаем setTitleMovie из контекста

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        setTitleMovie(inputValue); // Обновляем titleMovie в контексте
    };

    return (
        <>
            <input 
                value={inputValue} 
                onChange={handleInputChange} 
                type="text" 
                placeholder='Введите название кино' 
            />
            <button onClick={handleSearch}>Поиск</button>
        </>
    );
}