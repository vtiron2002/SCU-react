import React, { Fragment } from 'react';

import { Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';
import AppHeader from './components/AppHeader';
import LogoHeader from './components/LogoHeader';
import Quotes from './components/Quotes';
import InfoSection from './components/Info';
import MemberJoinSection from './components/MemberJoinSection';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FollowUs from './components/FollowUs';
import { NewsContextProvider } from "./NewsApi";
import News from "./components/News";



const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = () => (
  <Fragment>
    <CssBaseline />
      <Home />
      <LogoHeader />
      <Quotes />
      <InfoSection />
      <MemberJoinSection />
      <FollowUs />

     </Fragment>
);

export default withStyles(styles)(App);
