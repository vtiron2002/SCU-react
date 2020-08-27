import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
 //Import here your file style

const FollowUs = () => {
return (
<Container>
  <Row>
    <Col>
      <div className="mb-5 mt-4">
      <center>
          <h1>Follow Us!</h1>
          <br />
          <a href="https://www.facebook.com/Silver-City-Uprising-104701874678136" className="fa fa-facebook" />
          {/* <a href="#" class="fa fa-twitter"></a> */}
          {/* <a href="#" class="fa fa-linkedin"></a> */}
          {/* <a href="#" class="fa fa-youtube"></a> */}
          <a href="https://www.instagram.com/silvercityuprising/" className="fa fa-instagram" />
        </center>
      </div>
    </Col>
  </Row>
</Container>
);
}


export default FollowUs;
