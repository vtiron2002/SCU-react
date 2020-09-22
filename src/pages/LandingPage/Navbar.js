import React, { useState } from 'react'
import { Navbar, Nav as BaseNav, NavDropdown } from 'react-bootstrap'
import { styled } from '@material-ui/core/styles';
import logo from '../../img/newlogo-sm.png';
import loginPic from '../../img/login.png';

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


const NavBar = () => {
    const [navBar, setNavBar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        // <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <Navbar className="navbar navbar-expand-lg scrolling-navbar justify-content-between fixed-top" style={{
            borderBottom: navBar ? '1px solid #000000' : '5px',
            background: navBar ? 'white' : '',
            transition: navBar ? '0.75s ease' : '',
        }}>
            <Navbar.Brand id="navbar-brand" href="/">
                <img style={{ width: '120px', background: 'white', padding: '10px', borderRadius: '5px' }} src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown title={<span style={{ fontWeight: 'bold', color: navBar ? '#000000' : '#ffffff' }}>Our Programs</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/training" >Training</NavDropdown.Item>
                        <NavDropdown.Item href="/taskForce">Volunteer Task Force</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span style={{ fontWeight: 'bold', color: navBar ? '#000000' : '#ffffff' }}>About Us</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
                        <NavDropdown.Item href="/founders">Our Staff</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span style={{ fontWeight: 'bold', color: navBar ? '#000000' : '#ffffff' }}>Get Involved</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/volunteer">Volunteer Opportunities</NavDropdown.Item>
                        <NavDropdown.Item href="/events">Public Events</NavDropdown.Item>
                        <NavDropdown.Item href="/member">Become A Member</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/news" style={{ fontWeight: 'bold', color: navBar ? '#000000' : '#ffffff' }}>News</Nav.Link>
                    <Nav.Link href="/contact" style={{ fontWeight: 'bold', color: navBar ? '#000000' : '#ffffff' }}>Contact</Nav.Link>
                    <DonateLink href="https://www.flipcause.com/widget/OTIyNjU=">Donate</DonateLink>
                    <Nav.Link href="/login">
                        <img style={{ width: '32px', borderRadius: '25px' }} src={loginPic} alt="loginpic" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        // </nav>
    )
}

export default NavBar
