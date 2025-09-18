import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const Home = () => {

    const { devices } = useContext(GlobalContext)
    console.log(devices)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>HOME</h1>
                </div>
            </div>
        </div>
    )
}

export default Home