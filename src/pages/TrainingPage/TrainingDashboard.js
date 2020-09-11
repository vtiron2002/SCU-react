import React, { useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TrainingChart from '../../components/TrainingChart';
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import './TrainingPage.css';

class TrainingHome extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
    const percentage = 90;
    // const [value, onChange] = useState(new Date());

		return (
			<div>
				<Container>
          <div style={{marginTop: '30px'}}>
          <Card style={{ flex: '1 1 1',bottom:'20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }}>
            <Card.Body>
              <Card.Title>TRAINING DASHBOARD</Card.Title>
            </Card.Body>
          </Card>
          </div>
					<Row>

						<Col xs="3">
            <div>
             <Card style={{ flex: '1 1 1', width: '18rem', margin: '0rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }}>
               <CardBody>
                 <CardTitle>Percentage Completed</CardTitle>
                 <CircularProgressbar value={percentage} text={`${percentage}%`} />
               </CardBody>
             </Card>
           </div>
            <Row>

            <div>
             <Card style={{ flex: '1 1 1', width: '18rem', margin: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }}>
               <CardBody>
                 <CardTitle>Current Module</CardTitle>
                 <CardSubtitle>Module 1 Class Introduction</CardSubtitle>
                 <Button>Start</Button>
               </CardBody>
             </Card>
           </div>
            </Row>
            <Row>

            <div>
             <Card style={{ flex: '1 1 1', width: '18rem', margin: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }}>
               <CardBody>
                 <CardTitle>Mentor Call</CardTitle>
                 <CardSubtitle>Schedule a call with your mentor</CardSubtitle>
                 <Button>Book Now</Button>
               </CardBody>
             </Card>
           </div>
            </Row>
						</Col>

						<Col xs="6">
            <Card style={{ flex: '1 1 1', width: '30rem', margin: '2rem',top: '-32px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }}>
              <CardBody>
                <CardTitle>Weekly Productivity</CardTitle>
                <TrainingChart />
              </CardBody>
            </Card>
            <Row>
            <Card style={{ flex: '1 1 1', width: '30rem',top: '-32px',left: '50px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }}>
              <CardBody>
                <h3>Modules</h3>
                <CardTitle>Module 1  Class Introduction and Overview</CardTitle>
                <CardSubtitle>Task Time 2-3 Hours</CardSubtitle>
                <CardTitle>Module 2</CardTitle>
                <CardSubtitle>Task Time 2-3 Hours</CardSubtitle>
                <CardTitle>Module 3</CardTitle>
                <CardSubtitle>Task Time 2-3 Hours</CardSubtitle>
                <CardTitle>Module 4</CardTitle>
                <CardSubtitle>Task Time 2-3 Hours</CardSubtitle>
              </CardBody>
            </Card>
            </Row>
						</Col>

						<Col xs="3">
            <Card className="calendar-scu">
              <CardBody>
              <Calendar
                // onChange={onChange}
                // value={value}
              />
              </CardBody>
            </Card>

            <Row>
            <Card style={{ flex: '1 1 1', width: '30rem', margin: '1rem',left:'-32px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }}>
            <CardBody>
              <CardTitle>Training Chart</CardTitle>
              <form className="form" id="addItemForm">
                <input type="text" className="input" id="addInput" placeholder="Search messages" />
              </form>
              <br />
              <CardSubtitle>John Doe</CardSubtitle>
              <Button>Mentor</Button>
              <p>This is a message</p>
            </CardBody>
          </Card>
            </Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default TrainingHome;
