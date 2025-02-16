import React from 'react'
import Movies from '../modules/movies/Movies'
import { MovieProvider } from '../modules/movies/context/MovieContext'

export default function Catalog() {
  return (
    <>
      <MovieProvider>
        <Movies></Movies>
      </MovieProvider>
    </>
  )
}
