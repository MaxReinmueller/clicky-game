// dependencies
import React from 'react';
import Logo from '../images/1.jpg';
import {
    Card, CardImg, CardDeck, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import "../styles/Cards.css";

function Cards(props) {
    return (
      <div className="container">
        <CardDeck>
        <Card className="cardStyle">
          <CardImg src={Logo} alt="Card image cap" />
        </Card>
        <Card className="cardStyle">
          <CardImg src={Logo} alt="Card image cap" />
        </Card>
        <Card className="cardStyle">
          <CardImg src={Logo} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
    );
}

export default Cards;