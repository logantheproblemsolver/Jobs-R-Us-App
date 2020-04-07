import React, { Component } from 'react';

class JobData extends Component {
  render() {
    const job = this.props.jobData.map((jobs, i) => {
      return (
        <section className="jobSection" key={i}>
          <p className="h2">{jobs.title}</p>
          <p>Company: {jobs.company}</p>
          <p>Salary: {jobs.salary_range}</p>
          <p>Description: {jobs.description}</p>
          <p>Application Link: <a href={jobs.link} target="_blank" rel="noopener noreferrer">Apply here!</a></p>
        </section>
      );
    })
    return (
      <div className="viewJobs">
        {job}
      </div>
    );
  };
};

export default JobData;
