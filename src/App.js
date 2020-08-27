import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline, withStyles } from '@material-ui/core';

import Home from './pages/Home';
import Login from './pages/loginPage/loginPage';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(2)
		}
	}
});

const App = ({ classes }) => (
	<Fragment>
		<CssBaseline />
		<main className={classes.main}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={(props) => <Login {...props} />} />
			</Switch>
		</main>
	</Fragment>
);

export default withStyles(styles)(App);
