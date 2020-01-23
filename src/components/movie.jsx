import React from 'react'

const Movie = ({movies}) => {
    if(movies) {
        return (
        <div className="movie">

            <br/>

                <div className="movie-title">
                    {movies.Title}
                </div>

                <div className="movie-year">
                    {movies.Year}
                </div>

                <div className="movie-image">
                    <img src={movies.Poster} title={movies.Title}/>
                </div>

            <br/>

        </div>
    )}
    else {return ( <h1> No movies fetched</h1>) }

}

export default Movie