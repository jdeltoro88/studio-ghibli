import React from 'react';


const MovieCard = ({ film }) => {
    return (
        <div className='film-list'>

    <h2>{film.title}</h2>
    <p>{film.description}</p>
    <div classsName = 'bottom'>
        <p>Director: {film.director}</p>
    <p>Release Date: {film.release_date}</p>
        </div>
        </div>
    )
}


export default MovieCard