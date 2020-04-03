import React, {Component} from 'react';
import './uploadJobs.css'
import { Link } from 'react-router-dom';

class UploadJobs extends Component {
  
  updateUrl = () => {
    return;
  }


  render() {
    return (
      <div className="uploadJob">
        <h1>Upload Job Here</h1>
        <form className="uploadForm" >
          <label htmlFor="title" >
            Job Title: 
          </label>
            <input type="text" className="input" name="title" />
          <label htmlFor="company">
            Company:
          </label>
            <input type="text" className="input" name="company" />
          <label htmlFor="salary">
            Salary Range:          
          </label>
          <input type="text" className="input" name="salary" />
          <label htmlFor="description">
            Job Description:   
          </label>
          <textarea className="textarea" name="description" />
          <label htmlFor="link">
            Application Link:           
          </label>
          <input type="url" className="input" name="link" />
          <div className="buttons">
            <button type="button" className="submit"><Link to="/success" className="link">Upload Job!</Link></button>
            <button type="reset" className="clearForm">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UploadJobs;
