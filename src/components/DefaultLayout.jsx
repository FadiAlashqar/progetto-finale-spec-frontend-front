import React, { children, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UseDevices from '../hooks/UseDevices'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const DefaultLayout = ({ children }) => {

    const { favDevice, setFavDevice } = useContext(GlobalContext)
    console.log(favDevice)

    return (
        <>
            <header>
                <div className="row p-3">
                    <div className="col-4">
                        <h1>Device Shop</h1>
                    </div>
                    <div className="col-8 d-flex justify-content-evenly">
                        <div className=''><NavLink to='/'>Home</NavLink></div>
                        <div className=''><NavLink to='/compare'>Compare</NavLink></div>
                        <div className=''><NavLink to='/favourites'>Favourites</NavLink></div>
                    </div>
                </div>
            </header>
            <main className='d-flex'>
                <div className="content flex-grow-1">
                    {children}
                </div>
                <aside className="side-bar">
                    <div className="fav-section">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <h3><i className="fa-solid fa-heart"></i></h3>
                            </div>
                            <div className="col-12">
                                {
                                    favDevice.map((f) => {
                                        return <div key={f.id}>
                                            <img className='img-fluid' src={f.img} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default DefaultLayout