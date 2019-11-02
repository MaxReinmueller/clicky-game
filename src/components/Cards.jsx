// dependencies
import React from 'react';
import "./styles/cards.css";

function Cards(props) {
    return (
      <div  onClick={() => { props.shuffle(props.id)}}>
        <img className="cardStyle" src={props.image} alt={props.name}/>
    </div>
    
    );
}

export default Cards;