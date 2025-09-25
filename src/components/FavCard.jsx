import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const FavCard = ({ title, category, releaseYear, model, ram, phoneStorage, img, id, removeFav }) => {
    console.log('Render Card:', title)
    const { comparedDevice } = useContext(GlobalContext)


    return (
        <div className="card fav-card">
            <img src={img} className="card-img-top" />
            <div className="card-body">
                <NavLink to={`/details/${id}`}><h5 className="card-title">{title}</h5></NavLink>
                <p className="card-text"><strong>Category : </strong>{category}</p>
                <p><strong>Release year : </strong> {releaseYear}</p>
                <p><strong>CPU : </strong>{model}</p>
                <p><strong>RAM : </strong>{ram} <span>GB</span></p>
                <p><strong>Storage : </strong>{phoneStorage}<span>GB</span></p>
                <div>
                    <button onClick={removeFav} className="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FavCard)