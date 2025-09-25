import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Card from '../components/Card'
import { useState } from 'react'
import UseDevices from '../hooks/UseDevices'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const { devices, setDevices, setCompareDevice, comparedDevice, favDevice, setFavDevice } = useContext(GlobalContext)
    const [query, setQuery] = useState("")
    const { getSpecificDevice, getCategory } = UseDevices()
    const [some, setSome] = useState(null)
    const [categoryValue, setCategoryValue] = useState("")
    const [sort, setSort] = useState(1)

    console.log(devices)
    console.log(comparedDevice)
    console.log(favDevice)


    const handleSort = () => {
        const obj = structuredClone(some || devices)
        obj.sort((a, b) => {
            return a.title.localeCompare(b.title) * sort
        })
        setSome(obj)
    }

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-3">
                    <input id='searchbar'
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-primary mx-1" onClick={async () => {
                        const data = await getSpecificDevice(query)
                        const filteredDevices = devices.filter((d) => {
                            return data.some((p) => p.title === d.title)
                        })
                        setSome(filteredDevices)
                    }}>Search</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary" onClick={() => {
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
                    <button className="btn btn-primary mx-1" onClick={async () => {
                        const data = await getCategory(categoryValue)
                        const category = devices.filter((d) => {
                            return data.some((p) => p.title === d.title)
                        })
                        setSome(category)
                    }}>Search</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary" onClick={() => {
                        handleSort()
                        sort === 1 ? setSort(-1) : setSort(1)
                    }}>A-Z </button>
                </div>
            </div>
            <div className="row row-cols-3 g-3 justify-content-evenly">
                {(some ? some : devices).map((d) => {
                    return <div key={d.id} className="col">
                        <Card
                            img={d.img}
                            title={d.title}
                            addCompare={() => setCompareDevice((prev) => [...prev, d])}
                            id={d.id}
                            addFav={() => setFavDevice((prev) => [...prev, d])}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home