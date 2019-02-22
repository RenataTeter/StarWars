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
    this.sortAbc = this.sortAbc.bind(this)
    this.sortYear = this.sortYear.bind(this)
    this.sortOrder = this.sortOrder.bind(this)
    this.sortYearMax = this.sortYearMax.bind(this)
  }

  sortAbc () {
    this.setState({
      listOfMovies: this.state.listOfMovies.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })
  }

  sortYear () {
    this.setState({
      listOfMovies: this.state.listOfMovies.sort((a, b) => a.year - b.year)
    })
  }

  sortYearMax () {
    this.setState({
      listOfMovies: this.state.listOfMovies.sort((a, b) => b.year - a.year)
    })
  }

  sortOrder () {
    this.setState({
      listOfMovies: this.state.listOfMovies.sort((a, b) => a.id - b.id)
    })
  }

  render () {
    return (
      <div>
        <Sort sortAbc={this.sortAbc} sortYear={this.sortYear} sortOrder={this.sortOrder} sortYearMax={this.sortYearMax} />
        <Movies swMovies={this.state.listOfMovies} />
      </div>
    )
  }
}
