import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Registrace from './components/Registrace';

const App = () => (
  <>
    <Registrace />
  </>
);

render(<App />, document.querySelector('#app'));
