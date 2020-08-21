import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
 //Import here your file style

const InfoSection = () => {
return (
<Container>
  <Row>
    <Col>
    <section id="info1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="info-left">
              <img className="d-none d-lg-block mw-100" src={require("../img/blm.jpg")} alt="" sizes="(max-width: 320px) 300px,(max-width: 480px) 440px,800px" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="info-right">
              <h2>Silver City Uprising&#39;s Mission</h2>
              <p>"To create, build and promote healthy thriving businesses within the community, to positively contribute to the economic empowerment, growth and development of our community for this generation and future generations."</p>
              <br />
              <a className="btn btn-success btn-lg" href="/about/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Col>
  </Row>
</Container>
);
}


export default InfoSection;
