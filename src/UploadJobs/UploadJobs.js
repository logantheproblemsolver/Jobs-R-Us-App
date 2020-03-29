import React, {Component} from 'react';
import './uploadJobs.css'

class UploadJobs extends Component {
  render() {
    return (
      <div className="uploadJob">
        <h1>Upload Job Here</h1>
        <form className="uploadForm">
          <label htmlFor="title" >
            Job Title: 
            <input type="text" className="input" name="title" />
          </label>
          <label htmlFor="company">
            Company:
            <input type="text" className="input" name="company" />
          </label>
          <label htmlFor="salary">
            Salary Range:
            <input type="text" className="input" name="salary" />
          </label>
          <label htmlFor="description">
            Job Description:
            <textarea className="textarea" name="description" />
          </label>
          <label htmlFor="link">
            Application Link: 
            <input type="url" className="input" name="link" />
          </label>
          <button type="submit">Upload Job!</button>
        </form>
      </div>
    )
  }
}

export default UploadJobs;
