// dependencies
import React from 'react';
import {
    Card, CardImg, CardTitle
  } from 'reactstrap';
import "../styles/Cards.css";

function Cards(props) {
  console.log("cards", props);
    return (
      <div>
      <Card>
        <CardImg src={props.image} />
        <CardTitle>{props.name}</CardTitle>
      </Card>
    </div>
    );
}

export default Cards;