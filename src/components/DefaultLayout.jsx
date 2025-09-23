import React, { children, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UseDevices from '../hooks/UseDevices'

const DefaultLayout = ({ children }) => {

    return (
        <>
            <header>
                <div className="row">
                    <div className="col-12">
                        <h1>Device Shop</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center p-3">
                        <NavLink to='/'>Home</NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center p-3">

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