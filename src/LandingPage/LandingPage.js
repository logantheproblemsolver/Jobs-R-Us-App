import React, {Component} from 'react';
import './landingPage.css'

class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <h1 className="h1">Welcome to Jobs R' Us!</h1>
        <p>This page is a simple job board posting site.</p> <br />
        <p>The real big problem 
          these days are that every job board possting site is either too expensive or they go for a niche. This job board is inexpensive and also allows jobs of all kinds to be posted!</p>
      </div>
    )
  }
}

export default LandingPage;
