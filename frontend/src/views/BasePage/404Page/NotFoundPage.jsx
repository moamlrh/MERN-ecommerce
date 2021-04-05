import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./style.scss";

const NotFoundPage = () => {
  return (
    <Container className="not-found-page container ">
      <div className="not-found-center">
        <Typography variant="h2">
          <b>404</b> Page not found
        </Typography>
        <Link to="/">home page</Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
