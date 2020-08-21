import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Home />
      <Route exact path="/" component={Home} />
      <LogoHeader />
      <Quotes />
      <InfoSection />
      <MemberJoinSection />
       </main>
     </Fragment>
);

export default withStyles(styles)(App);
