import React from 'react';
import ReactDom from 'react-dom';
import UploadJobs from './UploadJobs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<UploadJobs />, div);
  ReactDom.unmountComponentAtNode(div);
});
