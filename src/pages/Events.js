import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';


const Events = () => {
  return (
    <Container className="mb-5" style={{ marginTop: '100px' }}>
      <center><h1 className="mb-5">Public Events</h1></center>
      <Row>
        <Col>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../img/event1.jpg")} />
            <Card.Body>
              <Card.Title>Enroll Now Kindergarten Open House</Card.Title>
              <Card.Text>
                Tue, Aug 25, 2020 at 10:00 AM<br />
    Location: Creative Kids Early Learning Center
    </Card.Text>
              <Button onclick="window.open('https://patch.com/connecticut/meriden/calendar/event/20200825/877301/enroll-now-kindergarten-open-house','_blank')" variant="danger">More Info</Button>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../img/event2.jpg")} />
            <Card.Body>
              <Card.Title>Overdose Awareness Day Drive-Through</Card.Title>
              <Card.Text>
                Sat, Aug 29, 2020 at 11:00 AM<br />
      Location:Hubbard Park, 999 West Main Street, Meriden, CT, 06451
    </Card.Text>
              <Button onclick="window.open('https://patch.com/connecticut/meriden/calendar/event/20200829/876012/overdose-awareness-day-drive-through','_blank')" variant="danger">More Info</Button>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../img/event3.jpeg")} />
            <Card.Body>
              <Card.Title>Afrobeats & Mimosas</Card.Title>
              <Card.Text>
                Sun, Aug 30, 1:00 PM
    <br />
Location:Soulbaila 735 Wethersfield Avenue Hartford, CT 06114
    </Card.Text>
              <Button onclick="window.open('https://www.eventbrite.com/e/afrobeats-mimosas-tickets-75491038729?aff=ebdssbcitybrowse','_blank')" variant="danger">More Info</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


export default Events;
