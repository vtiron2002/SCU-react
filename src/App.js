import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Founders from './pages/Founders';
import Mission from './pages/Mission';
import Training from './pages/Training';
import News from './pages/NewsPage/News';
import Volunteer from './pages/Volunteer';
import TaskForce from './pages/TaskForce';
import Events from './pages/Events';
import MemberHome from './pages/MemberPages/MemberHome';
import Landing from './pages/LandingPage/Landing';
import Login from './pages/loginPage/loginPage';
import Nav from './pages/LandingPage/Navbar';

import './App.css';


import CommunityPage from './pages/MemberPages/CommunityPage';
import ApplicationsPage from './pages/MemberPages/ApplicationsPage';

const BaseApp = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/founders' component={Founders} />
        <Route path='/contact' component={Contact} />
        <Route path='/mission' component={Mission} />
        <Route path='/training' component={Training} />
        <Route path='/news' component={News} />
        <Route path='/volunteer' component={Volunteer} />
        <Route path='/taskForce' component={TaskForce} />
        <Route path='/events' component={Events} />
        <Route path='/login'>
          <Login setUser={setUser} />
        </Route>

        {/* all member pages will can route this way */}
        <Route exact path='/member' component={MemberHome} />
        <Route path='/member/applications' component={ApplicationsPage} />
        <Route path='/member/community' component={CommunityPage} />
      </Switch>
    </BrowserRouter>
  );
};

const App = styled(BaseApp)({
  backgroundImage: 'linear-gradient(0deg, #c7ddea 0%, white 40%, white 100%)',
  backgroundAttachment: 'fixed',
});

export default App;
