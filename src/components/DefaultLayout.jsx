import React, { children } from 'react'
import { NavLink } from 'react-router-dom'

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