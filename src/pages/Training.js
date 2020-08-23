import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const Mission = () => {
return (
<Container>
  <Row>
    <Col>

      <div className="container training">
        <div className="row">
          <div className="col">
            <div className="jumbotron jumbotron-fluid customjumbotron customTraining">
              <div className="container">
                <h1 className="display-4">SCU TRAINING PROGRAM</h1>
                <br /><br />
              </div>
            </div>
            <ul>
              <li>Financial Literacy Training
                <ul>
                  <li>Members will receive training on how to save money, building equity through
                    investments and how to live within their means to decrease financial insecurities.</li>
                </ul>
              </li>
              <li>Technology Training
                <ul>
                  <li>There are a number of paths to choose from such as Technical Support, Web Development, Mobile Development and many others.</li>
                  <li>
                    Members will receive training on specific technologies and applications used for work, college
                    and/or leisure.
                  </li>
                  <li>
                    SCU will provide members with a online learning platform that enable them to self-learn and earn certificates.
                  </li>
                </ul>
              </li>
              <li>Business Literacy Training
                <ul>
                  <li>
                    Members who fall into financial crisis seeking financial assistance of any kind will be
                    required to take this training.
                  </li>
                </ul>
              </li>
            </ul>
            <p style={{textAlign: 'center'}}>
              All trainings will be conducted by certified educators selected by SCU and based on their
              availability.
            </p>
            <br /><br />
            <div className="join">
              <h2 className="title">Become A Member Today and Start Training!</h2><br />
              <a className="btn btn-danger btn-lg" href="https://mailchi.mp/0d937b05404c/membership">Join Us</a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</Container>
);
}


export default Mission;
