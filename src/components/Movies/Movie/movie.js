import React from 'react'
import './movie.css'
import PropTypes from 'prop-types'

class Movie extends React.Component {
  constructor () {
    super()
    this.state = {
      showDescription: false
    }
  }
    showDescription = () => {
      this.setState({ showDescription: !this.state.showDescription })
    }

    render () {
      const { name, description, image } = this.props
      return (
        <li className='movie__wrapper'>
          <div>
            <a>
              <img
                src={image}
                className='movie__image'
                alt={name}
              />
              <h3 className='movie__title' onClick={this.showDescription}>
                {name}
              </h3>
            </a>

            <p className='movie__description'>
              {this.state.showDescription && description}
            </p>
          </div>
        </li>
      )
    }
};

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}

export default Movie
