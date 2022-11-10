import React from 'react'
import { useState, useEffect } from 'react'
import movieAPI from '../../../services/movieAPI';
import { Navigate, useNavigate } from 'react-router-dom';
const Showing = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            try {
                const data = await movieAPI.getMovies();
                setMovies(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return (

        <div>
            {movies.map((item) => (
                <div key={item.maPhim}>
                    <span>{item.tenPhim}</span>
                    <button onClick={() => navigate(`/movie/${item.maPhim}`)}>Chi tiết</button>
                </div>
            ))}
        </div>
    )
}

export default Showing