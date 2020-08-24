import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
 //Import here your file style

const MemberJoinSection = () => {
return (
<Container>
  <Row>
    <Col>
      <br />
      <br />
      <br />
        <center><h1>Become A Member Today!</h1></center>

        <div className="container-fluid member">
          <div className="row">
            <div className="col">
              <p style={{fontSize: '27px'}}>You will become a part of the movement to see change in our community by using all our efforts and resources to rebuild,
                uplift and educate our youths or adults who may need assistance.  Join now!</p>
              <div className="text-center">
              <a className="btn btn-lg btn-danger" href="https://mailchi.mp/0d937b05404c/membership">Join Us</a>
              </div>
            </div>
          </div>
        </div>


    </Col>
  </Row>
</Container>
);
}


export default MemberJoinSection;
