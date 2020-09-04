import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline, withStyles } from '@material-ui/core';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LogoHeader from './components/LogoHeader';
import Quotes from './components/Quotes';
import InfoSection from './components/Info';
import MemberJoinSection from './components/MemberJoinSection';
import FollowUs from './components/FollowUs';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(2)
		}
	}
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
