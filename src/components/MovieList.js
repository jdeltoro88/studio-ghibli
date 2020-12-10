import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'




export default function MovieList(){


    const [films, setFilms] = useState([])
    const effectFn = () => {
        axios 
        .get('"https://ghibliapi.herokuapp.com/films"')
        .then(response => {
            console.log(response)
            setFilms(response.data)
        })
        .catch(error => console.log(error))
    }
    

    useEffect(effectFn, [])


    return (
        <div className = 'film'>
        {films.map(film => (
            <MovieCard key={film.id}  film={film}/>

        ))}
        </div>
    )
}