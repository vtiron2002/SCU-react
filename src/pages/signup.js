import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import states from '../data/state_enum';
import axios from 'axios';
import config from '../config';
import authServices from '../services/authServices';
import validator from '../services/validator';

const signup = () => {
	const onSubmit = (e) => {};

	return (
		<Container>
			<h1 className="text-center"> Join Us </h1>
			<h3 className="text-center text-secondary">Become part of the Movement</h3>
			<br />
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" name="email" />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridUsername">
						<Form.Label>User Name</Form.Label>
						<Form.Control type="text" placeholder="Enter User Name" name="user_name" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" name="password" />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridDob">
						<Form.Label>Date of Birth</Form.Label>
						<Form.Control type="text" placeholder="mm/dd/yyyy" name="dob" />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridPhone">
						<Form.Label>Phone #</Form.Label>
						<Form.Control type="phone" placeholder="888-888-8888" name="phone" />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridImg">
						<Form.Label>Password</Form.Label>
						<Form.Control type="text" placeholder="https://i.imgur.com/rJypzr4.jpg" name="profileImg" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Street</Form.Label>
					<Form.Control placeholder="1234 Main St" name="street" />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control placeholder="San Diego"/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>State</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
							<option>Choose...</option>
							<option value="" />
							{states.map((state, i) => (
								<option key={i} value={state}>
									{state}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control placeholder="99999" />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridCountry">
						<Form.Label>Country</Form.Label>
						<Form.Control placeholder="United States" name="country" />
					</Form.Group>
				</Form.Row>

				<Button variant="success px-5" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default signup;
