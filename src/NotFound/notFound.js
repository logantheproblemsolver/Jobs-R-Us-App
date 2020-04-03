import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <p className="notFoundText">Sorry the page you are looking for does not exist.</p> 
        <p className="homeLink">Please click <Link to="/">here</Link>!</p>
      </div>
    )
  }
}

export default NotFound;
