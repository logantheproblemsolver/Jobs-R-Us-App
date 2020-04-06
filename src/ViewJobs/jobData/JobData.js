import React, { Component } from 'react';

class JobData extends Component {
  render() {
    const job = this.props.jobData.map((jobs) => {
      return (
        <section className="jobSection" key={jobs.id}>
          <p className="h2">{jobs.title}</p>
          <p>{jobs.company}</p>
          <p>{jobs.salary_range}</p>
          <p>{jobs.description}</p>
          <p><a href={jobs.link} target="_blank" rel="noopener noreferrer">Apply here!</a></p>
        </section>
      )
    })
    return (
      <div className="viewJobs">
        {job}
      </div>
    )
  }
}

export default JobData;
