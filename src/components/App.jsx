import React from 'react'
import Movies from './Movies/movies'
import Sort from './Sort'

export class App extends React.Component {
  render () {
    return (
      <div>
        <Sort />
        <Movies />
      </div>
    )
  }
};
