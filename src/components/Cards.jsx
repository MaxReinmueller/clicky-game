// dependencies
import React from 'react';
import Logo from '../images/imageHolder.png';
import {
    Card, CardImg, CardDeck, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import "../styles/Cards.css";

function Cards(props) {
    return (
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
    );
}

export default Cards;