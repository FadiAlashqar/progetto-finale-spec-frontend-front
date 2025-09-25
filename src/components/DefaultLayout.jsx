import React, { children, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UseDevices from '../hooks/UseDevices'

const DefaultLayout = ({ children }) => {

    return (
        <>
            <header>
                <div className="row p-3">
                    <div className="col-4">
                        <h1>Device Shop</h1>
                    </div>
                    <div className="col-8 d-flex justify-content-evenly">
                        <div><NavLink to='/'>Home</NavLink></div>
                        <div><NavLink to='/compare'>Compare</NavLink></div>
                        <div><NavLink to='/favourites'>Favourites</NavLink></div>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default DefaultLayout