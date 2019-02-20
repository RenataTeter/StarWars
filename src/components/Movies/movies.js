import React from 'react'
import Movie from './Movie/movie'
import { swMovies } from '../../data/swMovies'

const Movies = () => (
  <ul className='movies__wrapper'>
    {swMovies.map(item => (
      <Movie key={item.name} {...item} />
    ))}
  </ul>
)

export default Movies
