import React from 'react'
import PropTypes from 'prop-types'

const style = {
  /* backgroundColor: 'black'
   color: #fff,
  margin:0 20px,
  with: 40px,
  padding: 20px,
  cursor: 'pinter' */
}

export const Sort = (props) => {
  return (
    <div>
      <button style={style} onClick={props.sortAbc}>Sort alphabetically</button>
      <button style={style} onClick={props.sortOrder}>Correct viewing order</button>
      <button style={style} onClick={props.sortYear}>Year of the film's release</button>
      <button style={style} onClick={props.sortYearMax}>Latest Movies</button>
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
