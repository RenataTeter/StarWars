import React from 'react'
import PropTypes from 'prop-types'

const styleButton = {
  flex: `1 1 auto`,
  backgroundImage: 'linear-gradient(to top, #000, #777 51%, #000 100%)',
  color: `#f7ed40`,
  textTransform: `uppercase`,
  margin: `10px`,
  padding: `20px`,
  borderRadius: 10,
  cursor: 'pointer',
  ':hover': {
  }
}

export const Sort = (props) => {
  return (
    <div>
      <button style={styleButton} onClick={props.sortAbc}>Sort alphabetically</button>
      <button style={styleButton} onClick={props.sortOrder}>Correct viewing order</button>
      <button style={styleButton} onClick={props.sortYear}>The newest movie</button>
      <button style={styleButton} onClick={props.sortYearMax}>The oldest movie</button>

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
