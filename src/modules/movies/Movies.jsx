import React, { useEffect, useState } from 'react'

export default function Movies() {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=dead&apikey=d6de9954')
            .then(response => response.json())
            .then(data => setMovie(data.Search))
    }, [])
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>Year: {movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                </li>
            ))}
        </ul>
    )
}
