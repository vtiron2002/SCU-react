
import ReactDOM from 'react-dom';
import App from './App';

import React from 'react'
import './App.css';
import "./index.css";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import AppHeader from './components/AppHeader';
import Contact from './pages/Contact';
import Founders from './pages/Founders';
import Mission from './pages/Mission';
import Training from './pages/Training';
import News from './pages/NewsPage/News';
import Volunteer from './pages/Volunteer';
import TaskForce from './pages/TaskForce';
import Events from './pages/Events';
import MemberHome from './pages/MemberHome';
import Landing from './pages/LandingPage/Landing'
import Login from './pages/loginPage/loginPage'

import Nav from './pages/LandingPage/Navbar'



ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <div>
        {/* <AppHeader /> */}
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route path="/founders" component={Founders} />
        <Route path="/contact" component={Contact} />
        <Route path="/mission" component={Mission} />
        <Route path="/training" component={Training} />
        <Route path="/news" component={News} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/taskForce" component={TaskForce} />
        <Route path="/events" component={Events} />
        <Route path="/login" component={Login} />
        <Route path="/member" component={MemberHome} />

      </div>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);



if (module.hot) module.hot.accept();
