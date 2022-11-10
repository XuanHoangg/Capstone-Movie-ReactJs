import React from 'react'
import { useState, useEffect } from 'react'
import movieAPI from '../../../services/movieAPI'
const Banner = () => {
    const [banners, setBanner] = useState([]);
    useEffect(() => {
        // IIFE function
        (async () => {
            const data = await movieAPI.getBanners();
            setBanner(data);
        })()
    }, [])
    return (
        <div>
            {banners.map((item) => (
                <img
                    key={item.maBanner}
                    src={item.hinhAnh}
                    alt={`banner-${item.maBanner}`}
                />
            ))}
        </div>
    )
}

export default Banner