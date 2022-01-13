/*
  exemple: https://codesandbox.io/s/00254q4n6p
*/

import React from 'react';
import ReactDOM from "react-dom"

const DemoPortal = () => {

  return ReactDOM.createPortal(
    <div>Portal Demo</div>,
    document.getElementById("root-portal")
  );

};

export default DemoPortal;