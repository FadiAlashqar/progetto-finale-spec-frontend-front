import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Card from '../components/Card'
import { useState } from 'react'
import UseDevices from '../hooks/UseDevices'

const Home = () => {

    const { devices, setDevices } = useContext(GlobalContext)
    const [query, setQuery] = useState("")
    const { getSpecificDevice, getCategory } = UseDevices()
    const [some, setSome] = useState(null)
    const [categoryValue, setCategoryValue] = useState("")
    const [sort, setSort] = useState(1)

    console.log(devices)


    const handleSort = () => {
        const obj = structuredClone(devices)
        obj.sort((a, b) => {
            return a.title.localeCompare(b.title) * sort
        })
        setSome(obj)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
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
                </div>
                <div className="col-3">
                    <button onClick={() => {
                        setSome(null)
                        setQuery("")
                    }}>Reset</button>
                </div>
                <div className="col-3 d-flex">
                    <select className="form-select"
                        value={categoryValue}
                        onChange={(e) => setCategoryValue(e.target.value)}
                    >
                        <option value="">Category</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Tablet">Tablet</option>
                    </select>
                    <button onClick={async () => {
                        const data = await getCategory(categoryValue)
                        const category = devices.filter((d) => {
                            return data.some((p) => p.title === d.title)
                        })
                        setSome(category)
                    }}>Search</button>
                </div>
                <div className="col-3">
                    <button onClick={() => {
                        handleSort()
                        sort === 1 ? setSort(-1) : setSort(1)
                    }}>A-Z </button>
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