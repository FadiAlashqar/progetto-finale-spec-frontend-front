
import React, { memo } from 'react'

const Card = ({ title, category, releaseYear, model, ram, phoneStorage, img }) => {
    console.log('Render Card:', title)
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{category}</p>
                    <p>{releaseYear}</p>
                    <p>{model}</p>
                    <p>{ram}</p>
                    <p>{phoneStorage}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card)