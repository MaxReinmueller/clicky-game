import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const MyJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">Clicky Cat Game!</h1>
          <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;