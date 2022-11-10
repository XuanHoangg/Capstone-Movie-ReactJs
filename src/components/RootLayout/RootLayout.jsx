import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Header />
            <Outlet />

        </div>
    )
}

export default RootLayout