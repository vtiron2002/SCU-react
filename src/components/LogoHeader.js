import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
 //Import here your file style

const LogoHeader = () => {
return (
<Container>
  <Row>
    <Col md="6">
    <div>
       <div className="showcase-left ml-5">
         <h1>SILVER</h1>
         <h1>CITY</h1>
         <h1>UPRISING</h1>
         <hr />
         <h2>CORPORATION</h2>
       </div>
       <a className="btn btn-danger btn-lg showcase-btn" href="/about/">Our Mission</a>
     </div>
    </Col>
    <Col md="6">
    <div className="showcase-right">
      <img className="showcase-img" alt="logo" src={require("../img/SCU.png")} />
    </div>
    </Col>
  </Row>
</Container>
);
}


export default LogoHeader;
