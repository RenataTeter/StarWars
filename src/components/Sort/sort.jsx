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
      <button style={style} onClick={props.sort}>Correct viewing order</button>
      <button style={style}>Sort alphabetically</button>
      <button style={style}>year of the film's release</button>
    </div>
  )
}

Sort.propTypes = {
  sort: PropTypes.function
}
