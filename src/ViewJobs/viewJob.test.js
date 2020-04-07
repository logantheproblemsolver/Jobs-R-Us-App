import React from 'react';
import ReactDom from 'react-dom';
import ViewJobs from './ViewJobs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<ViewJobs />, div);
  ReactDom.unmountComponentAtNode(div);
});
