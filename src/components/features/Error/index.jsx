import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Error = () => {
  return (
    <div className="container">
      <div class="section">
        <h1 class="error">404</h1>
        <div class="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link class="back-home" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
