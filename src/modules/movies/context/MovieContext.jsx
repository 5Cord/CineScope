import React, { createContext, useState } from 'react';

// Создаем контекст
export const MovieContext = createContext();

// Создаем провайдер контекста
export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [titleMovie, setTitleMovie] = useState('');

    return (
        <MovieContext.Provider value={{ movies, setMovies, titleMovie, setTitleMovie }}>
            {children}
        </MovieContext.Provider>
    );
};