import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const TaskForce = () => {
  return (
    <section>
      <div className="jumbotron jumbotron-fluid contact" style={{ color: '#f8f9fa', fontWeight: 'bolder', background: 'black' }}>
        <div className="container">
          <center><h1 className="display-4" style={{ marginTop: '100px' }}>Volunteer Task Force</h1></center>
        </div>
      </div>
      <Row>
        <Col>
          <div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="jumbotron jumbotron-fluid customTaskForce">
                    <div className="container">

                      <br /><br />
                    </div>
                  </div>
                  <ul>
                    <li>Lawn Services
            <ul>
                        <li>Members receive free lawn cuts, garden grooming and plants as long as volunteers and
                        equipment are available to SCU.
              </li>
                      </ul>
                    </li>
                    <li>Neighborhood cleanup (raking leaves, remove dead or dying trees, pick up garbage, provide
                    garbage bins, remove abandoned furniture, cut overgrown brush etc.) as long as volunteers and
                    equipment is available to SCU.
            <ul>
                        <li>
                          Members can put in for a request to have their neighborhood cleaned up by our
                          volunteer task force.  This will be done on a first serve bases.
              </li>
                        <li>
                          Members can recommend and put in a request for other black neighborhoods that are
                          in need of a cleaning
              </li>
                      </ul>
                    </li>
                    <li>Internships
            <ul>
                        <li>
                          SCU is committed to education and will participate in the college internship program.
              </li>
                        <li>Interns will be provided with proof of completed hours and they have met the
                        instructions required guidelines.  Institution must provide SCU with requirements that
                        the student must fulfill in their daily internship in order to receive recognition form such
                institution (examples of institutions but not limited to Schools, Colleges, Employment)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br /><br />
            <Row className="col-md text-center">
              <Col md="4">
                <div>
                  <img className="tech" alt="help" src={require("../img/help.svg")} />
                </div>
              </Col>
              <Col md="4">
                <div className="">
                  <img className="tech" alt="help2" src={require("../img/help2.svg")} />
                </div>
              </Col>
              <Col md="4">
                <div className="">
                  <img className="tech" alt="help3" src={require("../img/help3.svg")} />
                </div>
              </Col>
            </Row>
            <div className="join">
              <h2 className="title">Become A Member Today and Start Volunteering!</h2><br />
              <a className="btn btn-danger btn-lg" href="https://mailchi.mp/0d937b05404c/membership">Join Us</a>
            </div>
            <br /><br />
          </div>
        </Col>
      </Row>
    </section>
  );
}


export default TaskForce;
