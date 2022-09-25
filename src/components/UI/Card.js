import React from 'react';

import "./Card.css";

const Cards = props => {
    const classes = 'card ' + props.className; // Tudo que recebermos como nome de classe no componentes sera concatenado nesta string
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;
