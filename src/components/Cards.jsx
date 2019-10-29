// dependencies
import React from 'react';
import {
    Card, CardImg, CardDeck
  } from 'reactstrap';
import "../styles/Cards.css";

function Cards(props) {
    return (
      <div className="container">
        <CardDeck>
        <Card className="cardStyle">
          <CardImg src={props.image} alt={props.id}/>
        </Card>
      </CardDeck>
      </div>
    );
}

export default Cards;