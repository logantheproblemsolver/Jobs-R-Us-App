import React, {Component} from 'react';
import JobData from './jobData/JobData';
import config from '../config';
import './viewJobs.css';

class ViewJobs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      error: null,
    };
  };
    setJobs = (jobs) => {
      this.setState({
        jobs,
      });
    };

    componentDidMount() {
      const url = config.API_ENDPOINT;

      fetch(url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(
          res => {
            if(!res.ok) {
              return res.json().then(error => Promise.reject(error));
            }
            return res.json();
          })
        .then(this.setJobs)
        .catch(error => {
          this.setState({error})
        });
    };

  
  render() {
    return (
      <div className="viewJobPage">
        <JobData jobData={this.state.jobs}/>
      </div>
    );
  };
};

export default ViewJobs;
