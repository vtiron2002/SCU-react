import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const Mission = () => {
return (
<Container>
  <Row>
    <Col>
    <div>
      <div className="container" id="about_page">
        <div className="row">
          <div className="col">
            <h3>Mission</h3>
            <br />
            <p>To create, build and promote healthy thriving businesses within the black community, to positively
              contribute to the economic empowerment, growth and development of the black community for this
              generation and future generations.</p>
            <br />
            <h3>Vision</h3>
            <br />
            <p>To see an increase in communities where black businesses thrive and the underserved are economically
              empowered.</p>
            <h3>Goals</h3>
            <br />
            <p>To provide economic empowerment to the black community.</p>
            <br /><br /><br />
          </div>
        </div>
      </div>
      <br className="mb-6" />
    </div>
    </Col>
  </Row>
</Container>
);
}


export default Mission;
