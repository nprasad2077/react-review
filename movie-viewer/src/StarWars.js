import data from './data.json'

const StarWars = () => {
    let wars = data.map(function(element){
        return `${element.movies.title}`
    })
    console.log(wars);



    return(
        <>
        <div className='side'>
            Title: {data.movies[0].title}
            Title: {data.movies[1].title}


        </div>
        </>
    )
}

export default StarWars