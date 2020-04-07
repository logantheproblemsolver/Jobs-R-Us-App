import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
  <BrowserRouter>
    <NotFound />
  </BrowserRouter>, div);
  ReactDom.unmountComponentAtNode(div);
});
