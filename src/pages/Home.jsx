import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Card from '../components/Card'

const Home = () => {

    const { devices } = useContext(GlobalContext)

    console.log(devices)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1><strong>HOME</strong></h1>
                </div>
            </div>
            <div className="row row-cols-3">
                {devices.map((d) => {
                    return <Card
                        key={d.id}
                        img={d.img}
                        category={d.category}
                        releaseYear={d.releaseYear}
                        model={d.model}
                        ram={d.ram}
                        phoneStorage={d.phoneStorage}
                        title={d.title}
                    />
                })}
            </div>
        </div>
    )
}

export default Home