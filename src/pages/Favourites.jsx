import React from 'react'
import CompareCard from '../components/CompareCard'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import FavCard from '../components/FavCard'

const Favourites = () => {

    const { favDevice, setFavDevice } = useContext(GlobalContext)
    console.log(favDevice)


    return (
        <div className="container">
            <div className="row row-cols-3 g-3 justify-content-evenly">
                {
                    favDevice.map((f) => {
                        return <div key={f.id} className="col">
                            <FavCard
                                img={f.img}
                                title={f.title}
                                category={f.category}
                                releaseYear={f.releaseYear}
                                model={f.model}
                                ram={f.ram}
                                phoneStorage={f.phoneStorage}
                                addCompare={() => setCompareDevice((prev) => [...prev, f])}
                                removeFav={() => setFavDevice(favDevice.filter((d) => d.id !== f.id))}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Favourites