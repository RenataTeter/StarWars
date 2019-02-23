import React from 'react'
import Movie from './Movie/movie'
import PropTypes from 'prop-types'

const styleUl = {
  width: `60vw`,
  margin: `50px auto 0`,
  textAlign: `center`,
  backgroundColor: `rgba(0, 0, 0, 0.8)`,
  padding: `30px 0px`
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
