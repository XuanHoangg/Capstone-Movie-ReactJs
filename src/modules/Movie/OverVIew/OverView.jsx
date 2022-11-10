import React, { useState, useEffect } from 'react'

const OverView = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        // gọi api và setMovie
    }, [movieId])
    return (
        <div>OverView</div>
    )
}

export default OverView