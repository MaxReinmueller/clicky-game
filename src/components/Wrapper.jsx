import React from "react";
import {
  CardDeck
} from 'reactstrap';

function Wrapper(props) {
    console.log("wrapper", props);
    return (
      <div className="container wrapper">
        <CardDeck>{props.children}</CardDeck>
      </div>
    );
  }
  
  export default Wrapper;
  