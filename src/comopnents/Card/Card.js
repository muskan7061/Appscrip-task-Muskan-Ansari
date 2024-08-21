import React from 'react';
import "./card.css";

const Card = ({ title, image }) => {
    return (
        <div className='imageContainer'>
            <div><img src={image} alt={title} /></div>
            <div className='titleContainer'>{title}</div>
        </div>
    )
}

export default Card