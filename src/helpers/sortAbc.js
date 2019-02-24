export const sortAbc = (listMovies) => {
  return listMovies.sort((a, b) => (a.name > b.name) ? true : ((b.name > a.name) ? -1 : 0))
}
