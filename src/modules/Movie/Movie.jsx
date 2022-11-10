import React from 'react'
import { useParams } from 'react-router-dom'
import Showtimes from './Showtimes'
import OverVIew from './OverVIew'
const Movie = () => {
    const { movieId } = useParams()
    return (
        <>
            <OverVIew movieId={movieId} />

            <Showtimes movieId={movieId} />
        </>
    )
}

export default Movie