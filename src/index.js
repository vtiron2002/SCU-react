
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import React, { Component } from 'react'
import './App.css';
import "./index.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavItem, NavLink, FormControl, Button } from 'react-bootstrap'
import AppHeader from './components/AppHeader';
import Contact from './pages/Contact';
import Founders from './pages/Founders';
import Mission from './pages/Mission';
import Training from './pages/Training';
import News from './pages/News';
import Volunteer from './pages/Volunteer';
import Grants from './pages/Grants';
import TaskForce from './pages/TaskForce';
import Events from './pages/Events';





ReactDOM.render(
  <BrowserRouter>

    <div>
      <AppHeader />

      <Route exact path="/" component={App} />
      <Route path="/founders" component={Founders} />
      <Route path="/contact" component={Contact} />
      <Route path="/mission" component={Mission} />
      <Route path="/training" component={Training} />
      <Route path="/news" component={News} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/grants" component={Grants} />
      <Route path="/taskForce" component={TaskForce} />
      <Route path="/events" component={Events} />

    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) module.hot.accept();
