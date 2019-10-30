import React from "react";

function Wrapper(props) {
    console.log("wrapper", props);
    return <div className="wrapper">{props.children}</div>;
    
  }
  
  export default Wrapper;
  