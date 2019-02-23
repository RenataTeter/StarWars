import React from 'react'
import PropTypes from 'prop-types'

const styleButton = {
  flex: `1 1 auto`,
  backgroundImage: 'linear-gradient(to top, #000, #cccccc 51%, #000 100%)',
  color: `#f7ed40`,
  textTransform: `uppercase`,
  margin: `10px`,
  with: `40px`,
  padding: `20px`,
  borderRadius: 10,
  cursor: 'pointer',
  transition: 'all 0.30s ease-in-out',
  ':focus': {
    color: `red`,
    backgroundImage: 'linear-gradient(to top, #000 0%, #777 50%, #000 100%)'
  }
}

export const Sort = (props) => {
  return (
    <div>
      <button style={styleButton} onClick={props.sortAbc}>Sort alphabetically</button>
      <button style={styleButton} onClick={props.sortOrder}>Correct viewing order</button>
      <button style={styleButton} onClick={props.sortYear}>The newest movie</button>
      <button style={styleButton} onClick={props.sortYearMax}>The atest Movies</button>

    </div>
  )
}

Sort.propTypes = {
  sortAbc: PropTypes.func
}

Sort.propTypes = {
  sortYear: PropTypes.func
}

Sort.propTypes = {
  sortYearMax: PropTypes.func
}

Sort.propTypes = {
  sortOrder: PropTypes.func
}
