import React, { Component} from 'react'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,NavItem,NavLink,FormControl,Button } from 'react-bootstrap'
  // import Home from './Home';
import Founders from '../pages/Founders';
import Contact from '../pages/Contact';



class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                      <Router>
                            <Navbar className="custom-nav" bg="light" variant="light" expand="lg" sticky="top">
                                <Navbar.Brand id="navbar-brand" href="/">SCU</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="navbar-brand ml-auto">
                                    <NavDropdown title="About Us" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
                                        <NavDropdown.Item href="/founders">Our Staff</NavDropdown.Item>
                                    </NavDropdown><NavDropdown title="Our Programs" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/training">Training</NavDropdown.Item>
                                        <NavDropdown.Item href="/grants">Grants</NavDropdown.Item>
                                        <NavDropdown.Item href="/taskForce">Volunteer Task Force</NavDropdown.Item>
                                    </NavDropdown><NavDropdown title="Get Involved" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/volunteer">Volunteer Opportunities</NavDropdown.Item>
                                        <NavDropdown.Item href="/events">Public Events</NavDropdown.Item>
                                        <NavDropdown.Item href="/member">Become A Member</NavDropdown.Item>
                                        </NavDropdown>
                                    <Nav.Link href="/news" to="/news">News </Nav.Link>
                                    <Nav.Link href="/contact" to="/contact">Contact</Nav.Link>
                                    <button onclick="window.open('https://www.paypal.com/biz/fund?id=F5L38BZW2V7DJ','_blank')" className="btn btn-success btn-lg">DONATE</button>
                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                        </Router>

                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;
