import React from 'react'
/* import './movie.css'  */
import PropTypes from 'prop-types'

const styles = {
  container: {
    listStyle: `none`,
    padding: 0
  },
  img: {
    cursor: 'pointer',
    width: `auto`,
    height: `300px`,
    borderRadius: `2%`
  },
  title: {
    cursor: 'pointer',
    color: `#eee`,
    fontWeight: `bold`
  },
  description: {
    color: `#eee`,
    padding: `0 50px 20px `,
    textAlign: `justify`,
    marginBottom: `20px`
  }
}

class Movie extends React.Component {
  constructor () {
    super()
    this.state = {
      showDescription: false
    }
    this.showDescription = this.showDescription.bind(this)
  }

  showDescription () {
    this.setState({ showDescription: !this.state.showDescription })
  }

  render () {
    const { name, description, image } = this.props
    return (
      <li style={styles.container}>
        <div>
          <a>
            <img
              style={styles.img}
              onClick={this.showDescription}
              src={image}
              alt={name}
            />
            <h3 style={styles.title} onClick={this.showDescription}>
              {name}
            </h3>
          </a>

          <p style={styles.description}>
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
