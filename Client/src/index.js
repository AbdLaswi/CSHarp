import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
axios.defaults.baseURL = "https://localhost:44379/";
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
