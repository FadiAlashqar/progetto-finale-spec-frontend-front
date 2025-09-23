import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Card from '../components/Card'
import { useState } from 'react'
import UseDevices from '../hooks/UseDevices'

const Home = () => {

    const { devices, setDevices } = useContext(GlobalContext)
    const [query, setQuery] = useState("")
    const { getSpecificDevice } = UseDevices()
    const [some, setSome] = useState(null)

    console.log(devices)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={async () => {
                        const data = await getSpecificDevice(query)
                        const filteredDevices = devices.filter((d) => {
                            return data.some((p) => p.title === d.title)
                        })
                        setSome(filteredDevices)
                    }}>Search</button>
                    <button onClick={() => setSome(null)}>Reset</button>
                </div>
            </div>
            <div className="row row-cols-3">
                {(some ? some : devices).map((d) => {
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