import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config';
import authServices from '../../services/authServices';
import './login-style.css';
class login extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	onSubmitHandler = (e) => {
		e.preventDefault();
		const { email, password } = e.target;

		axios
			.post(config.loginEndpoint, {
				user_name: email.value,
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

	render() {
		return (
			<div className="loginPage">
				<Container>
					<Row>
						<Col>
							<div className="spacer"> </div>
							<Form onSubmit={this.onSubmitHandler}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>User Name</Form.Label>
									<Form.Control placeholder="User Name" name="email" />
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
