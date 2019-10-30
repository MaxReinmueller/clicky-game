// dependencies
import React from 'react';
import {
    Card, CardImg
  } from 'reactstrap';
import "../styles/cards.css";

function Cards(props) {
  console.log("cards", props);
    return (
      <div className="cardStyle">
      <Card>
        <CardImg src={props.image}/>
      </Card>
    </div>
    );
}

export default Cards;