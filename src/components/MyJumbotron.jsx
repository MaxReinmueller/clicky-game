import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./styles/jumbo.css";

const MyJumbotron = (props) => {
  return (
      <Jumbotron fluid >
        <Container fluid>
          <h1 className="display-3 text-center">Clicky Cat Game!</h1>
          <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
        </Container>
      </Jumbotron>
  );
};

export default MyJumbotron;