import React, {Component} from 'react';
import config from '../config';
import { Redirect } from 'react-router-dom';
import './uploadJobs.css';

class UploadJobs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      salary_range: '',
      description: '',
      link: '',
      redirect: false,
    };
  };

  titleChange = (t) => {
    t.preventDefault();
    this.setState({
      title: t.target.value,
    });
  };

  companyChange = (c) => {
    c.preventDefault();
    this.setState({
      company: c.target.value,
    });
  };

  salaryChange = (s) => {
    s.preventDefault();
    this.setState({
      salary_range: s.target.value,
    });
  };

  descriptionChange = (d) => {
    d.preventDefault();
    this.setState({
      description: d.target.value,
    });
  };

  linkChange = (l) => {
    l.preventDefault();
    this.setState({
      link: l.target.value,
    });
  };

  handleOnSubmit = submit => {
    submit.preventDefault();
    const { title, company, salary_range, description, link } = submit.target
    const jobs = {
      title: title.value,
      company: company.value,
      salary_range: salary_range.value,
      description: description.value,
      link: link.value,
    };

    const url = config.API_ENDPOINT;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(jobs),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: {err},
        });
      });


  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/success" />
    };
    return (
      <div className="uploadJob">
        <h1>Upload Job Here</h1>
        <form className="uploadForm" onSubmit={e => this.handleOnSubmit(e)}>
          <label htmlFor="title" >
            Job Title: 
          </label>
            <input 
              type="text" 
              className="input" 
              id="tite" name="title" 
              onChange={t => this.titleChange(t)} 
              value={this.state.title} 
              required 
            />
          <label htmlFor="company">
            Company:
          </label>
            <input 
              type="text" 
              className="input" 
              id="company" 
              name="company" 
              onChange={c => this.companyChange(c)} 
              value={this.state.company} 
              required 
            />
          <label htmlFor="salary_range">
            Salary Range:          
          </label>
          <input 
            type="text" 
            className="input" 
            id="salaray_range" 
            name="salary_range" 
            onChange={s => this.salaryChange(s)} 
            value={this.state.salary_range} 
          />
          <label htmlFor="description">
            Job Description:   
          </label>
          <textarea 
            className="textarea" 
            id="description" 
            name="description" 
            onChange={d => this.descriptionChange(d)} 
            value={this.state.description} 
            required 
          />
          <label htmlFor="link">
            Application Link:           
          </label>
          <input 
            type="url" 
            className="input" 
            name="link" 
            onChange={l => this.linkChange(l)} 
            value={this.state.link} 
            required 
          />
          <div className="buttons">
            <button type="submit" className="submit">Upload Job!</button>
            <button type="reset" className="clearForm">Cancel</button>
          </div>
        </form>
      </div>
    );
  };
};

export default UploadJobs;
