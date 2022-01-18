import React from 'react'

const MovieList = ({movies , adding , handleAdding}) => {
    return (
        <React.Fragment>
            {movies.map(movie=> {
                return(
                <div onClick={()=>handleAdding(movie , adding)} key={movie.imdbID} className='d-flex flex-column justify-content-start m-3 movie'>
                    <img src={movie.Poster} className='movie-img'/>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <span>{movie.Year}</span>
                    </div>
                    <div className='add'>{adding ? "Add To" : "Remove from"} Favourite</div>
                </div>)
            })}
        </React.Fragment>
    )
}

export default MovieList
