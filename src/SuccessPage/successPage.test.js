import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SuccessPage from './SuccessPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
  <BrowserRouter>
    <SuccessPage />
  </BrowserRouter>, div);
  ReactDom.unmountComponentAtNode(div);
});