import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import UploadJobs from './UploadJobs/UploadJobs';
import ViewJobs from './ViewJobs/ViewJobs';
import SuccessPage from './SuccessPage/SuccessPage';
import NotFound from './NotFound/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/uploadjobs" component={UploadJobs} />
          <Route exact path="/viewjobs" component={ViewJobs} />
          <Route exact path="/success" component={SuccessPage} />
          <Route exact path='/notfound' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  };
};

export default App;
