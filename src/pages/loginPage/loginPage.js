import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config';
import authServices from '../../services/authServices';
import validator from '../../services/validator';
import './login-style.css';
class login extends React.Component {
	constructor() {
		super();
		this.state = {
			btnDisable: true,
			errorMessage: {
				userNameError: '',
				passwordError: ''
			},
			userError: false,
			passwordError: false
		};
	}

	onSubmitHandler = (e) => {
		e.preventDefault();
		const { user_name, password } = e.target;

		axios
			.post(config.loginEndpoint, {
				user_name: user_name.value,
				password: password.value
			})
			.then((res) => {
				authServices.saveAuthToken(res.data.authToken);
				authServices.saveUserInfo(res.data.userInfo);
				if (res.status === 201) {
					this.props.history.push('/members');
				}
			})
			.catch((err) => console.log(err.response));
	};

	onInputHandler = (e) => {
		e.preventDefault();

		const user_name = document.querySelector('.user_name');
		const password = document.querySelector('.password');

		const userNameStatus = validator.userNameValidator(user_name.value);
		const passWordStatus = validator.passwordValidator(password.value);

		const error = {
			userNameError: userNameStatus.errorMessage || '',
			passwordError: passWordStatus.errorMessage || ''
		};

		if (!userNameStatus.status && !passWordStatus.status) {
			return this.setState({ btnDisable: false, userError: false, passwordError: false });
		}
		if (userNameStatus.status) {
			this.setState({ userError: userNameStatus.status });
		} else if (passWordStatus.status) {
			console.log(passWordStatus.status);
			this.setState({ passwordError: passWordStatus.status });
		}

		this.setState({ btnDisable: true });

		this.setState({ errorMessage: error });
	};

	render() {
		return (
			<div className="loginPage pt-5 mt-5">
				<Container>
					<Row>
						<Col>
							{this.state.userError ? <div>{this.state.errorMessage.userNameError} </div> : <div />}

							{this.state.passwordError ? <div>{this.state.errorMessage.passwordError}</div> : <div />}
							<Form onSubmit={this.onSubmitHandler} onBlur={this.onInputHandler}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>User Name</Form.Label>

									<Form.Control placeholder="User Name" name="user_name" className="user_name" />
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>

									<Form.Control
										type="password"
										placeholder="Password"
										name="password"
										className="password"
									/>
								</Form.Group>

								<Button variant="primary" type="submit" style={{ width: '150px', margin: '0 auto' }}>
									Login
								</Button>
							</Form>
						</Col>
						<Col>
							<div className="spacer"> </div>
							<h1 className="text-center pt-2">Become a Member</h1>
							<p className="px-5  text-center">
								Gain access to our programs and be part of the movment to see change in our community
							</p>
							<Button variant="secondary joinUs-btn">Join Us</Button>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default login;
