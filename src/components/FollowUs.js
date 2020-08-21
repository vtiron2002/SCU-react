import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
 //Import here your file style

const FollowUs = () => {
return (
<Container>
  <Row>
    <Col>
    <div className="container quotes">
            <p>“If not us, then who?
              If not now, then when?”</p>
            <p className="author">~John Lewis</p>
          </div>
    </Col>
  </Row>
</Container>
);
}


export default FollowUs;
