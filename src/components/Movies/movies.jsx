import React from 'react'
import Movie from './Movie/movie'
import PropTypes from 'prop-types'

const Movies = (props) => (
  <ul className='movies__wrapper'>
    {props.swMovies.map(item => (
      <Movie key={item.name} {...item} />
    ))}
  </ul>
)

Movies.propTypes = {
  swMovies: PropTypes.arrayOf(PropTypes.object)
}

export default Movies
