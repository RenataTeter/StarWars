import React from 'react'
import Movies from './Movies/movies'
import { Sort } from './Sort'

const styles = {
  container: {
    backgroundImage: `url(` + `http://catcountry105.com/img/1472a272f72d6fe0c7fb242c3b570d0f.jpg` + `)`,
    backgroundPosition: 'top',
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: `fixed`,
    margin: 0,
    padding: 0,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`
  },
  logo: {
    marginTop: `30px`,
    marginBottom: `30px`
  }

}
export class App extends React.Component {
  constructor () {
    super()
    this.state = {
      listOfMovies: []
    }
    this.sortAbc = this.sortAbc.bind(this)
    this.sortOrder = this.sortOrder.bind(this)
    this.sortYear = this.sortYear.bind(this)
    this.sortYearMax = this.sortYearMax.bind(this)
  }

  sortAbc () {
    this.setState({
      listOfMovies: this.state.listOfMovies.sort((a, b) => (a.name > b.name) ? true : ((b.name > a.name)))
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

  componentDidMount () {
    // eslint-disable-next-line no-undef
    fetch('http://localhost:3002/data')
      .then(response => response.json())
      .then(data => this.setState({ listOfMovies: data }))
  }

  render () {
    return (
      <div style={styles.container}>
        <img style={styles.logo}  src='https://pixel.nymag.com/imgs/daily/vulture/2016/12/18/18-Star-Wars-Logo.w710.h473.2x.jpg' />
        <Sort sortAbc={this.sortAbc} sortYear={this.sortYear} sortOrder={this.sortOrder} sortYearMax={this.sortYearMax} />
        <Movies swMovies={this.state.listOfMovies}  />
      </div>
    )
  }
}
