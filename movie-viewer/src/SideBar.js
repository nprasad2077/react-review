import React from 'react'

function SideBar(props) {

  return (
    <div className='side'>
    SideBar
        <h2>
            {props.movieData.movies[0].title}
        </h2>
    </div>
  )
}

export default SideBar