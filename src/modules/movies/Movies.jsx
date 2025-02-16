import React, { useEffect, useContext } from 'react';
import { MovieContext } from './context/MovieContext';
import InputSearch from './componetns/inputSearch';

export default function Movies() {
    const { movies, setMovies, titleMovie, setTitleMovie } = useContext(MovieContext);

    useEffect(() => {
        if (titleMovie) {
            fetch(`https://www.omdbapi.com/?s=${titleMovie}&apikey=d6de9954`)
                .then(response => response.json())
                .then(data => setMovies(data.Search || []))
                .catch(error => console.error('Error fetching movies:', error));
        } else {
            setMovies([]); // Очищаем список фильмов, если поисковый запрос пуст
        }
    }, [titleMovie, setMovies]);

    return (
        <>
            <InputSearch /> {/* Теперь InputSearch не требует пропсов */}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>Year: {movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>
                ))}
            </ul>
        </>
    );
}