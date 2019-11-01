import React from "react"
import { Alert } from 'reactstrap';

const Alerts = (props) => {
  return (
      <Alert color="info">
        {props.welcomeMessage}
      </Alert>
  );
};

export default Alerts;