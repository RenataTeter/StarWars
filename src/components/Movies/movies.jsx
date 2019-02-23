import React from 'react'
import Movie from './Movie/movie'
import PropTypes from 'prop-types'

const styleUl = {
  width: `80vw`,
  margin: `50px auto 0`,
  textAlign: `center`
}

const Movies = (props) => (
  <ul style={styleUl}>
    {props.swMovies.map(item => (
      <Movie key={item.name} {...item} />
    ))}
  </ul>
)

Movies.propTypes = {
  swMovies: PropTypes.arrayOf(PropTypes.object)
}

export default Movies
