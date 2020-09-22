import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const Volunteer = () => {
  return (
    <section>

      <div className="jumbotron jumbotron-fluid contact" style={{ color: '#f8f9fa', fontWeight: 'bolder', background: 'black' }}>
        <div className="container">
          <center><h1 className="display-4" style={{ marginTop: '100px' }}>Looking to Volunteer?</h1></center>
        </div>
      </div>
      <Row >
        <Col>
          <div className="container volunteer mb-4">
            <h3>We need:</h3>
            <ul>
              <li>Teachers
            <ul>
                  <li>Financial literacy</li>
                  <li>Business literacy</li>
                  <li>Home buyers education</li>
                </ul>
              </li>
              <li>Landscaping
          <ul>
                  <li>Gardners</li>
                  <li>Tree removal</li>
                  <li>Leaf removal</li>
                  <li>Snow removal</li>
                  <li>Trash pick up and remove</li>
                </ul>
              </li>
              <li>
                Fundraiser Coordinators
        </li>
              <li>Administration(Prefer Teens and preteens)
          <ul>
                  <li>Answer phones after school</li>
                  <li>Do youth intake</li>
                  <li>Maintain calendars</li>
                  <li>Filing</li>
                </ul>
              </li>
              <li>Recruiters</li>
              <li>Various Internships</li>
              <li>Babysitters (prefer youth that majors in childhood development)</li>
              <li>Youth Photographer</li>
              <li>Youth DJs</li>
            </ul>
            <p className="font-weight-bold">For more information or details please email info@silvercityuprising.org </p>
          </div>
        </Col>
        <Col>
          <img className="showcase-img mt-5" alt="learning" src={require("../img/learning1.jpg")} />

        </Col>
      </Row>

    </section>
  );
}

export default Volunteer;
