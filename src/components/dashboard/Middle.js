import React from 'react';
import Focusbox from '../layout/Focusbox';
import Selectbox from '../layout/Selectbox';
import Form from '../formComponents/Form';
import { BrowserRouter, Router, Route } from 'react-router-dom';

const Middle = () => {
  return (
    <BrowserRouter>
      <div style={middleStyle}>Middle
        <Route path="/focusbox" render={() => (<Focusbox placeholder="Share something with your neighbors" />)} />
        <Route path="/form" render={() => (<Form/>)} />
      </div>
    </BrowserRouter>
  );
};

const middleStyle = {
  flexGrow: '2'
};

export default Middle;
