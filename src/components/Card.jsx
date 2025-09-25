
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const Card = ({ title, category, releaseYear, model, ram, phoneStorage, img, addCompare, id, addFav }) => {
    console.log('Render Card:', title)
    const { comparedDevice } = useContext(GlobalContext)


    return (
        <div className="card">
            <img src={img} className="card-img-top" />
            <div className="card-body">
                <NavLink to={`/details/${id}`}><h5 className="card-title">{title}</h5></NavLink>
                <p className="card-text">{category}</p>
                <p>{releaseYear}</p>
                <p>{model}</p>
                <p>{ram}</p>
                <p>{phoneStorage}</p>
                <div className='d-flex justify-content-evenly'>
                    <button disabled={comparedDevice.length >= 2} onClick={addCompare} className="btn btn-primary">Compare</button>
                    <button className='btn btn-danger' onClick={addFav}><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card)