import React from 'react'
import Movies from './Movies/movies'
import { Sort } from './Sort'
import { swMovies } from '../data/swMovies'

export class App extends React.Component {
  constructor () {
    super()
    this.state = {
      listOfMovies: swMovies
    }
  }

  sort () {
    this.setState({
      listOfMovies: this.state.listOfMovies.sort(

      )
    })
  }

  render () {
    return (
      <div>
        <Sort sort={this.sort} />
        <Movies swMovies={this.state.listOfMovies} />
      </div>
    )
  }
};
