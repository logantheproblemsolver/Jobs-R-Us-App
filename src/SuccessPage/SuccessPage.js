import React, { Component } from 'react';
import './successPage.css';
import { Link } from 'react-router-dom';

class SuccessPage extends Component {
  render () {
    return (
      <div className="success">
        <p className="successText">
          Your job uploaded successfully!
        </p>
        <p className="subtext">
          Please click <Link to="/viewjobs">here</Link> to view the new job submission
        </p>
      </div>
    )
  }
}

export default SuccessPage;
