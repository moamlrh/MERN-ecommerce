import React from "react";
import { Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";


import './style.scss'


function ErrorComponent({ error }) {
  return (
    <div className='error-page'>
      <Error className="error-icon"/>
      <Typography className="error-text">{error}</Typography>
    </div>
  );
}

export default ErrorComponent;
