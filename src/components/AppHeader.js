import React from 'react'
import '../App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar as BaseNavbar, Nav as BaseNav, NavDropdown } from 'react-bootstrap'
import { styled } from '@material-ui/core/styles';
import logo from '../img/newlogo-sm.png';
import loginPic from '../img/login.png';

const Navbar = styled(BaseNavbar)({
  width: '100%',
  fontSize: '18px',
  color: 'black',
  padding: '40px 24px 12px',
})

const Nav = styled(BaseNav)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '15%',
})

const DonateLink = styled(Nav.Link)({
  color: 'white !important',
  backgroundColor: '#75c55d',
  borderRadius: '22px',
  padding: '8px 18px !important'
})

function BootstrapNavbar() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar className="custom-nav justify-content-between" expand="lg" sticky="top">
              <Navbar.Brand id="navbar-brand" href="/">
                <img style={{ width: '120px' }} src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown title="Our Programs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/training">Training</NavDropdown.Item>
                    <NavDropdown.Item href="/taskForce">Volunteer Task Force</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="About Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
                    <NavDropdown.Item href="/founders">Our Staff</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Get Involved" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/volunteer">Volunteer Opportunities</NavDropdown.Item>
                    <NavDropdown.Item href="/events">Public Events</NavDropdown.Item>
                    <NavDropdown.Item href="/member">Become A Member</NavDropdown.Item>
                    </NavDropdown>
                  <Nav.Link href="/news">News</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <DonateLink href="https://www.flipcause.com/widget/OTIyNjU=">Donate</DonateLink>
                  <Nav.Link href="/login">
                    <img style={{ width: '32px' }} src={loginPic} alt="loginpic" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default BootstrapNavbar;
