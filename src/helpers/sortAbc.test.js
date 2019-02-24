import { sortAbc } from './sortAbc'

const swMovies = [
  {
    name: 'Episode IV – A New Hope',
  },
  {
    name: 'Episode V – The Empire Strikes Back',
  },
  {
    name: 'Episode VI – The Return of the Jedi',
  },
  {
    name: 'Episode I – A Phantom Menace',
  },
  {
    name: 'Episode II – Attack of the Clones',
  },
  {
    name: 'Episode III – Revenge of the Sith',
  },
  {
    name: 'Episode VII – The Force Awakens',
  },
  {
    name: 'Rogue One – A Star Wars Story',
  },
  {
    name: 'Episode VIII – The Last Jedi',
  },
  {
    name: 'Solo – A Star Wars Story',
  }

]

const toMovies = [

  {
    name: 'Episode I – A Phantom Menace',
  },
  {
    name: 'Episode II – Attack of the Clones',
  },
  {
    name: 'Episode III – Revenge of the Sith',
  },
  {
    name: 'Episode IV – A New Hope',
  },
  {
    name: 'Episode V – The Empire Strikes Back',
  },
  {
    name: 'Episode VI – The Return of the Jedi',
  },
  {
    name: 'Episode VII – The Force Awakens',
  },
  {
    name: 'Rogue One – A Star Wars Story',
  },
  {
    name: 'Solo – A Star Wars Story',
  }

]

test('Sort from yangest to oldest', () => {
  expect(sortAbc(swMovies)).toEqual([toMovies])
})
