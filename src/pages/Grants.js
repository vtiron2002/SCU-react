import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const Mission = () => {
return (
<Container>
  <Row>
    <Col>
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="jumbotron jumbotron-fluid customGrants">
              <div className="container">
                <h1 className="display-4">GRANT ASSISTANCE PROGRAM</h1>
                <br /><br />
              </div>
            </div>
            <ul>
              <li>Struggling Businesses
                <ul>
                  <li>Members with their own business will receive financial assistance to get them out of
                    debt and back on track in the competitive market as long as funds are available.</li>
                  <li>Member must take the financial literacy training course.</li>
                  <li>Must present a plan that is sustainable and will keep them out of debt.</li>
                  <li>Must present a valid cash flow and expenditure sheet.</li>
                  <li>Board of directs vote in a quorum manner for approval.</li>
                  <li>Any such grant that gets denied can be reviewed for another quorum.</li>
                </ul>
              </li>
              <li>Education
                <ul>
                  <li>Students who overcome the odds will qualify for a grant, whose parents are members, if
                    they are designated as a kid who is most improved by the school social worker (student
                    must bring grades up from an F to a C or better to be recognized as most improved).
                    Grants will be distributed on a first come first serve basis as long as funds are available.
                    Grant amounts will be determined by available funds for this program.  The list will
                    continue to accept students until funds have been exhausted.  A dinner will be set up forstudents and family members at which the students will receive their grant check to be
                    used for educational needs.  Parents must provide SCU with a receipt to validate that
                    funds were used according the grant guidelines.  (acceptable items, school uniform,
                    school supplies, college fund, summer camp)</li>
                </ul>
              </li>
              <li>Start-up Businesses
                <ul>
                  <li>
                    Members can pitch their plan and if it is approved, applicant will receive a grant to help
                    them get started on the road to a successful business as long as funds are available.
                  </li>
                  <li>A quorum vote is need to approve.  If denied staff will work with member to come up
                    with a better plan.  Member can make a second request.</li>
                </ul>
              </li>
              <li>Foreclosure Prevention
                <ul>
                  <li>
                    Members can apply for grants to save their home as long as funds are available.  If
                    funding is not available SCU will search for funds for them or some kind of federal
                    assistance.
                  </li>
                </ul>
              </li>
              <li>Business Technology Upgrades
                <ul>
                  <li>
                    Members whose technology needs to be updated to keep up with the mainstream
                    market can apply for a grant as long as funds are available.  A quorum vote is required
                    for approval or denial.
                  </li>
                </ul>
              </li>
              <li>Sports Training and Membership
                <ul>
                  <li>
                    Members whose children are into sports that achieve academic excellence can be
                    nominated for a grant for one on one training from a personal trainer in select sports
                    such as basketball, baseball, volley ball and soccer as long as funds are available.
                    Selection will be on a case by case and at the discretion of the Board.
                  </li>
                </ul>
              </li>
              <li>Grants for leisure such as vacations and day trips, weddings, special celebrations for volunteers
                <ul>
                  <li>
                    Members who have been volunteering at the most events can put a request for leisure
                    funds.  It is an incentive to attract more people to get involved with the movement as
                    long as funds are available.  The selected candidate will be based on a lottery.
                  </li>
                </ul>
              </li>
              <li>Eviction Prevention
                <ul>
                  <li>
                    Members can apply for funds to keep them in their apartment based on a successful
                    application.  Any member found to be intentionally not paying their rent with the intent
                    to defraud SCU will not receive the grant. Such will be grounds for removal from the
                    program.  Members bill payment history will be reviewed.  In order to decrease
                    homelessness SCU will excise all avenues to reach the best outcome.
                  </li>
                </ul>
              </li>
              <li>Utility Assistance
                <ul>
                  <li>
                    On an emergency only, members can apply for assistance with paying utilities to restore
                    services, as long as funds are available. A review of bill payment history will be need to
                    make a decision on granting assistance along with a written letter of explanation.
                  </li>
                  <li>Member will be required to take SCU’s financial literacy training course.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Row className="col-md text-center">
      <Col md="4">
      <div>
        <img className="tech" src={require("../img/scholarship.svg")} />
      </div>
      </Col>
      <Col md="4">
      <div className="">
        <img className="tech" src={require("../img/scholarship2.svg")} />
      </div>
      </Col>
      <Col md="4">
      <div className="">
        <img className="tech" src={require("../img/scholarship3.svg")} />
      </div>
      </Col>
      </Row>
      <div className="join mb-5">
        <h2 className="title">Become A Member Today and Start Applying!</h2><br />
        <a className="btn btn-danger btn-lg" href="https://mailchi.mp/0d937b05404c/membership">Join Us</a>
      </div>
    </div>
    </Col>
  </Row>
</Container>
);
}


export default Mission;
