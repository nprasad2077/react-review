import React from 'react'
import SideBar from './SideBar'
import MovieDetails from './MovieDetails'
import data from './data.json'
import { json } from 'react-router-dom'
import StarWars from './StarWars'

const movieData = JSON.parse(JSON.stringify(data))
const test = 'test'
console.log(movieData.movies);
// let wars = movieData.map(function(element){
//   return `${element.movies.title}`
// })


function App() {
  return (
    <div className='app'>
      <SideBar movieData={movieData} test={test}/>
      {/* <StarWars /> */}
      <MovieDetails movieData={movieData}/>
    </div>
  )
}

export default App