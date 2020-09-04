import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config';
import authServices from '../../services/authServices';
import validator from  '../../services/validator';
import './login-style.css';
class login extends React.Component {
	constructor() {
		super();
		this.state = {
			btnDisable: true,
			errorMessage:''
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

	onBlurHandler = (e) => {
		e.preventDefault();
		//console.log(this.state.btnDisable)
	const user_name = document.querySelector(".user_name");
	const password = document.querySelector(".password");

	const userNameStatus = validator.userNameValidator(user_name);
	const passWordStatus = validator.userNameValidator(password);

	if(!userNameStatus.status && !passWordStatus.status){	
	return	this.setState({btnDisable:false})
	}	

		this.setState({btnDisable:true})		 
		this.setState({errorMessage:userNameStatus.errorMessage})
	

	};	

	render() {
		return (
			<div className="loginPage pt-5 mt-5">
				<Container>
					<Row>
						<Col>
							<Form onSubmit={this.onSubmitHandler} onBlur={this.onBlurHandler}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>User Name</Form.Label>										
								
									<Form.Label> {this.state.errorMessage}</Form.Label>
									<Form.Control placeholder="User Name" name="user_name" className="user_name" />
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Label>{this.state.errorMessage}</Form.Label>
									<Form.Control type="password" placeholder="Password" name="password" className="password"/>
								</Form.Group>
								{console.log(this.state.btnDisable) }

								<Button
									variant="primary"
									type="submit"
									style={{ width: '150px', margin: '0 auto' }}
									disabled={this.state.btnDisable}
								>
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
