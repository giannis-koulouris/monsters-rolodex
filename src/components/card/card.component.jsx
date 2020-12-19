import React from 'react';

import './card.styles.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
            <div className="single-card">{props.monster.name}</div>
            <h2><p>{props.monster.email}</p></h2>
        </div>
    )
}