import React, { useEffect, useState } from 'react';
import InputSearch from './componetns/inputSearch';
import styled from 'styled-components';

// Стилизованный контейнер для списка фильмов
const MovieListContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

// Стилизованный элемент списка фильмов
const MovieItem = styled.li`
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

// Стилизованное изображение постера
const MoviePoster = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

// Стилизованный контейнер для информации о фильме
const MovieInfo = styled.div`
    padding: 15px;
`;

// Стилизованный заголовок фильма
const MovieTitle = styled.h3`
    margin: 0 0 10px;
    font-size: 18px;
    color: #333;
`;

// Стилизованный текст информации о фильме
const MovieText = styled.p`
    margin: 0 0 8px;
    font-size: 14px;
    color: #666;
`;

export default function ListMovie() {
    const [movies, setMovies] = useState([]);
    const [titleMovie, setTitleMovie] = useState('');
    const [typeMovie, setTypeMovie] = useState('');

    useEffect(() => {
        let url = `https://www.omdbapi.com/?s=${titleMovie}&apikey=d6de9954`;
        if (typeMovie && typeMovie !== 'all') {
            url += `&type=${typeMovie}`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search || []))
            .catch((error) => console.error('Error fetching movies:', error));
    }, [titleMovie, typeMovie]);

    const handleSearch = (query) => {
        setTitleMovie(query);
    };

    const handleType = (query) => {
        setTypeMovie(query);
    };

    return (
        <>
            <InputSearch movieTitle={handleSearch} movieType={handleType} />
            <MovieListContainer>
                {movies.map((movie) => (
                    <MovieItem key={movie.imdbID}>
                        <MoviePoster
                            src={movie.Poster}
                            alt={movie.Title}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster'; // Запасное изображение
                            }}
                        />
                        <MovieInfo>
                            <MovieTitle>{movie.Title}</MovieTitle>
                            <MovieText>Type: {movie.Type}</MovieText>
                            <MovieText>Year: {movie.Year}</MovieText>
                        </MovieInfo>
                    </MovieItem>
                ))}
            </MovieListContainer>
        </>
    );
}