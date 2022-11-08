import React from 'react'

function MovieDetails(props) {
  return (
    <div className='details'>MovieDetails
    
    <h2>
        {props.movieData.movies[0].title}
    </h2>
    <p className='char'>
       Characters: {props.movieData.movies[0].main_characters[0]} {props.movieData.movies[0].main_characters[1]} {props.movieData.movies[0].main_characters[2]} {props.movieData.movies[0].main_characters[3]} {props.movieData.movies[0].main_characters[4]} {props.movieData.movies[0].main_characters[5]}
       Characters: 
    </p>
    <p className='description'>
        {props.movieData.movies[0].description}
    </p>
    
    
    </div>
  )
}

export default MovieDetails