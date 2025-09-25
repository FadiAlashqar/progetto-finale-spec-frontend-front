import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import CompareCard from '../components/CompareCard'

const ComparePage = () => {

    const { comparedDevice } = useContext(GlobalContext)
    console.log(comparedDevice)


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 compare-container d-flex justify-content-evenly align-items-center">
                    {comparedDevice.map((c) => {
                        return <CompareCard key={c.id}
                            img={c.img}
                            title={c.title}
                            category={c.category}
                            releaseYear={c.releaseYear}
                            model={c.model}
                            ram={c.ram}
                            phoneStorage={c.phoneStorage}
                        />
                    })}
                    {
                        comparedDevice.length > 0 && <div className="comparator">
                            <span className='vs'>VS</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ComparePage