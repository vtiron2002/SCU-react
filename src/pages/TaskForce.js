import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const TaskForce = () => {
return (
<Container>
  <Row>
    <Col>
    <div>
  <div className="container task">
    <div className="row">
      <div className="col">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">VOLUNTEER TASK FORCE</h1>
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
          <li>Food assistance
            <ul>
              <li>
                Volunteer staff will be available to retrieve food from SCU’s pantry 24 hours for members
                who have children to fulfill emergency late-night hour requests. Request must be
                justified. (example emergency... baby needs food, formula, milk) as long as such items
                are available to SCU they will be made available to members.
              </li>
              <li>Food will be provided upon request without explanation during business hours of
                operation as long as food is available to SCU.</li>
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
          <li>2-hour Babysitter Relief
            <ul>
              <li>Members who need a mental health break may sign up for available babysitting hours.
                Members are allotted 2 hours from an approved volunteer of SCU as long as volunteers
                are available.  A calendar will be available to members so they can view who is available
                and they may submit their request online. Staff will monitor calendar and notify volunteer that someone requested their services.  Staff will confirm with member.
                Members are entitled to only one 2 hr. request per both.  Babysitters will be given
                preferential selection based on their desire to work with children after graduation,
                currently studying child development, work in the field of youth Services or have an
                interest in running a daycare.  Must past background check and DCF registry clearance.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <br /><br />
  <div className="join">
    <h2 className="title">Become A Member Today and Start Training!</h2><br />
    <a className="btn btn-danger btn-lg" href="https://mailchi.mp/0d937b05404c/membership">Join Us</a>
  </div>
  <br /><br />
</div>
    </Col>
  </Row>
</Container>
);
}


export default TaskForce;
