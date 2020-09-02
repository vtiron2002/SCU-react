import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const Founders = () => {
return (
<Container>
  <Row>
    <Col>
    <div>
  <div className="jumbotron jumbotron-fluid" style={{color: '#f8f9fa', fontWeight: 'bolder', background: 'black'}}>
    <div className="container">
      <h1 className="display-4">SCU Staff</h1>
    </div>
  </div>
  <hr />
  <div className="container">
    <div className="row">
      <div className="col-md-7">
        <h3>Debbie D. Sears</h3>
        <div className="card">
          <div className="card-horizontal">
            <img className="card-img-top founders-img" src={require("../img/deb.jpeg")} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Board Treasurer</h5>
              <p className="card-text" />

            </div>
          </div>
        </div>
        <br /><br />
        <p>
          Debbie has over 20 years of healthcare experience as she started her career at Aetna as a work study
          student from Maloney High School.  She held numerous positions throughout her tenure with Aetna of
          25 years. Her first assignment was an office assistant for the fraud department, Cash Application
          Specialist, Escheat Analyst, Disability Team Leader and Senior Claims Reporting Analyst.  She currently
          holds the position of a Pharmacy Benefit Representative for Connecticare Inc. and has been employed
          with the insurance company for 6 years.   After she decided to take an early retirement from Aetna, she
          embarked on a new career.  She studied Pharmacy Technology at Middlesex Community College in
          Middletown, CT.  She is a licensed Pharmacy Technician.  At an early age caring for her grandmother she
          saw the need to educate the elderly and community on prescribed prescription drugs. She is very
          successful in her current role.   In her personal life she adores her son Damian who will be a senior this
          year in college.  She is very active in her church, Mount Hebron Baptist Church in Meriden, CT.  The Lord
          is first in her life.  She is on auxiliaries such as the Deaconess ministry,   Trustee ministry and served as
          the financial secretary/treasurer for 10 years.  She is on the Scholarship Committee for the past 8 years.
          Debbie also served as the property manager for their rental properties.   Most recently in the passing of
          her mother, she took over the Angel Tree ministry as the Chairperson.  She is now in her third successful
          year.    Fun fact about Debbie is she loves music and shoes.  She wrote three songs and paid for them
          with her allowance at the age of 14, she saw an ad in the Word up magazine.  She officially owns the
          rights to three songs. Her current goal is to own her own business.
        </p>
        <br /><br /><br />
        <h3>Brigitta Rainey</h3>
        <div className="card" style={{width: '18rem', height: '12rem'}}>
          <div className="card-horizontal">
            <img className="card-img-top founders-img" src={require("../img/gitta.jpeg")} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Board Secretary</h5>
              <p className="card-text" />

            </div>
          </div>
        </div>
        <br /><br />
        <p>
          Graduated Magnum Cum Laude, Springfield College 2017
          Brigitta has been a CT State Employee for the last 31 years and is currently an Equal Employment Opportunity Assistant,
          Affirmative Action. Brigitta is a BLM activist and firm believer of Human Rights.
          She was featured in the Meriden Record Journal in 1995 in her brave challenge to then U.S Representative Gary Franks,
          to a debate on Affirmative Action, a program for which Mr. Franks campaigned to abolish.
          Brigitta was recognized by the Hartford Courant in April 1996 for sponsoring an Easter Basket drive for 23 children living at Saint Vincent DePaul homeless shelter in Meriden.
          As a survivor of domestic abuse, Brigitta shares a compassion for helping people and values being a part of Silver City Uprising’s mission as a founder and organizer.
          Her motto is "Don't count the days, make the days count"!
          <a href="https://meritpages.com/brigittalove">Brigitta's Meritpage</a>
        </p>
        <br /><br /><br />
        <h3>Ty Rainey</h3>
        <div className="card" style={{width: '18rem', height: '12rem'}}>
          <div className="card-horizontal">
            <img className="card-img-top founders-img" src={require("../img/ty.jpeg")} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Vice Chairman</h5>
              <p className="card-text">Director of IT</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <br /><br />
        <p>Ty Rainey is a Meriden based Tech guru, web developer, father and community organizer.
          He is one of the Co-founders of Silver City Uprising and supporter of the black lives matter movement.
          This journey means so much to him and his fellow Co-founders.
          Before starting Silver City Uprising,&nbsp;Ty&nbsp;worked&nbsp;in IT for 8 years as a&nbsp;Desktop Support Technician
          &nbsp;and a&nbsp;Senior Technology Analyst.&nbsp;After a successful career helping&nbsp;new companies with their startup websites
          and&nbsp;hardware needs,&nbsp;Ty&nbsp;now&nbsp;creates applications to help automate the company processes.</p>
        <br /><br /><br />
      </div>
      <div className="col-md-2">
      </div>
      <div className="col-md-3">
        <h1>Become A Member Today!</h1>

        <br /><br /><br />

        <a className="btn btn-danger" href="https://mailchi.mp/0d937b05404c/membership">Join Us</a>


        <br /><br /><br />
        <h1>Follow Us!</h1>
        <br />
        <a href="https://www.facebook.com/Silver-City-Uprising-104701874678136" className="fa fa-facebook" />

        <a href="https://www.instagram.com/silvercityuprising/" className="fa fa-instagram" />
        <hr className="bar" />
        <h1>Donate to SCU</h1>
        <button onclick="window.open('https://www.paypal.com/biz/fund?id=F5L38BZW2V7DJ','_blank')" className="btn btn-danger btn-lg">DONATE</button>
        <hr className="bar" />
        <h4>Donation QR Code</h4>
        <img src={require("../img/donationQR.png")} alt="" />
      </div>
    </div>
  </div>
</div>
    </Col>
  </Row>
</Container>
);
}


export default Founders;
