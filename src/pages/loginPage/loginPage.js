import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import loginService from '../../services/loginService'
// import config from '../../config';
// import authServices from '../../services/authServices';
import './login-style.css';
const Login = ({ setUser }) => {
	let history = useHistory();

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const { username, password } = e.target;
		console.log(username.value, password.value);
		try {
			const data = await loginService.login({ user_name: username.value, password: password.value });
			console.log(data);
			history.push('/member')
			// token is stored in data.authToken
			setUser(data.userInfo)
			
		} catch (exception) {
			console.log(exception.response)
		}
		//
		// axios
		// 	.post(config.loginEndpoint, {
		// 		user_name: email.value,
		// 		password: password.value
		// 	})
		// 	.then((res) => {
		// 		authServices.saveAuthToken(res.data.authToken);
		// 		authServices.saveUserInfo(res.data.userInfo);
		// 		console.log(authServices.getUser())
		// 	})
		// 	.catch((err) => console.log(err.response));
	};

	return (
		<section>
			<div className="jumbotron jumbotron-fluid contact" style={{ color: '#f8f9fa', fontWeight: 'bolder', background: 'black' }}>
				<div className="container">
					<center><h1 className="display-4" style={{ marginTop: '100px' }}>Login</h1></center>
				</div>
			</div>
			<Row>
				<Col>
					<div className="spacer"> </div>
					<h1 className="text-center pt-2">Become a Member</h1>
					<p className="px-5  text-center">
						Gain access to our programs and be part of the movment to see change in our community
						</p>
					<Button variant="secondary joinUs-btn">Join Us</Button>
				</Col>
				<Col style={{ margin: '20px' }}>
					<div className="spacer"> </div>
					<Form onSubmit={onSubmitHandler}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>User Name</Form.Label>
							<Form.Control placeholder="User Name" name="username" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" name="password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Keep me logged in" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Login
							</Button>
					</Form>
				</Col>

			</Row>
		</section>
	);
}

export default Login;
