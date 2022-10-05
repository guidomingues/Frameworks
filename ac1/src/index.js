import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VerNome from './VerNome';
import Sobre from './Fim';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/VerNome"  component={VerNome} />
    <Route path="/Fim"  component={Sobre} />
    </Switch>
  </BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
