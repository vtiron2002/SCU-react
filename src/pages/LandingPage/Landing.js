import React, { useState } from 'react'
import { Carousel, Row, Container, Col, Button } from 'react-bootstrap'
import mentor from '../../img/mentor.jpg'
import volunteer from '../../img/volunteer.jpg'
import scu from '../../img/SCU.png'
import cleanup from '../../img/cleanup.jpg'
import scuFace from '../../img/SCU-face.png'
import internship from '../../img/internship-active.png'
import neighbourhoodCleaning from '../../img/neighborhoodcleanup-active.png'
import training from '../../img/training-active.png'
import { FaHeadset, FaFlask, FaFacebook, FaHandshake, FaInstagram } from 'react-icons/fa'
import './landing.css'
import TeamMember from './TeamMember'
import Nav from './Navbar'

const Landing = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid >
            <Row className="d-flex flex-col">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className="item" style={{
                        // height: '100vh',
                        // minHeight: '300px',
                        background: 'no-repeat center center scroll',
                        WebkitBackgroundSize: 'cover',
                        backgroundSize: 'cover'
                    }}>
                        <img className="img1"
                            className="d-block w-100 img"
                            src={mentor}
                            style={{ opacity: '0.7' }}
                            alt="First sliimport scu from '../img/SCU.png'
                            de"
                        />
                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%',
                            zIndex: '4'
                        }}>
                            <h1 className="c1" style={{ fontFamily: 'sans-serif', fontStyle: 'bold', fontSize: '8vw', color: '#FFFFFF' }}>Mentoring</h1>
                            <p className="c1" style={{ fontSize: '4vw', color: '#FFFFFF' }}>Our Youth Elevation program mentors and trains indivisuals.</p>
                            <Button variant="danger" size="lg" onClick={() => window.open('https://mailchi.mp/0d937b05404c/membership', '_blank')} style={{ marginRight: '20px' }}>Learn More</Button>
                            <Button size="lg" className="call-button" onClick={() => window.open('https://mailchi.mp/0d937b05404c/membership', '_blank')}>Our Programs</Button>
                        </Carousel.Caption>
                     </Carousel.Item>
                    <Carousel.Item style={{
                        background: 'no-repeat center center scroll',
                        WebkitBackgroundSize: 'cover',
                        backgroundSize: 'cover'
                    }}>
                        <img className="img1"
                            className="d-block w-100 "
                            src={cleanup}
                            style={{ opacity: '0.8' }}
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%',
                            zIndex: '4'
                        }}>
                            <h1 className="c1" style={{ fontFamily: 'sans-serif', fontStyle: 'bold', fontSize: '6vw', color: '#FFFFFF' }}>Community Empowerment</h1>
                            <p className="c1" style={{ fontSize: '4vw', color: '#FFFFFF' }}>“If not us, then who? If not now, then when?” ~ John Lewis</p>
                            <Button variant="danger" size="lg" onClick={() => window.open('https://mailchi.mp/0d937b05404c/membership', '_blank')} style={{ marginRight: '20px' }}>Join Now</Button>
                            <Button size="lg" className="call-button" onClick={() => window.open('https://mailchi.mp/0d937b05404c/membership', '_blank')}>Our Programs</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src={volunteer}
                            style={{ opacity: '0.7' }}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%',
                            zIndex: '4'
                        }}>
                            <h1 className="c1" style={{ fontFamily: 'sans-serif', fontStyle: 'bold', fontSize: '8vw', color: '#FFFFFF' }}>Volunteering</h1>
                            <p className="c1" style={{ fontSize: '4vw', color: '#FFFFFF' }}>
                                Our volunteer task force makes sure to rebuild and revitilize our community.
                            </p>
                            <Button variant="danger" size="lg" onClick={() => window.open('https://mailchi.mp/0d937b05404c/membership', '_blank')} style={{ marginRight: '20px' }}>Learn More</Button>
                            <Button size="lg" className="call-button" onClick={() => window.open('https://mailchi.mp/0d937b05404c/membership', '_blank')}>Our Programs</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#F5F7FD' }}>
                <h1 className="text-center" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Who We Are</strong></h1>
                <span className="mt-4 mb-4" style={{ fontSize: "18px", color: '#777777', fontStyle: 'bold' }}>- WE ARE SILVER CITY UPRISING -</span>
                <p className="text-center mb-4" style={{ fontSize: "18px", color: '#96979B' }}>We want to create, build and promote empowerment within the community, and positively contribute to the youth through growth and mentorship. For this generation and the future generations to come.</p>
                <div className="d-flex">
                    <div className="mr-4 rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                        <FaFacebook size={50} onClick={() => window.open("https://www.facebook.com/silvercityuprising/", "_blank")} />
                    </div>
                    <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                        <FaInstagram size={50} onClick={() => window.open("https://www.instagram.com/silvercityuprising/", "_blank")} />
                    </div>
                </div>
            </Row>
            <Row className="">
                <div className="col-md-6">
                    <img src={scuFace} className="img-fluid z-depth-1-half" alt="" />
                </div>
                <div className="col-md-6  d-flex align-items-start justify-content-center" style={{ flexDirection: 'column' }}>

                    <h2 className="mb-2 mt-4" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>What We Do</strong></h2>
                    <span><strong>We volunteer, mentor and train members to improve our mission of economic empowerment.</strong></span>
                    <hr />
                    <div className="d-flex" style={{ flexDirection: 'column', fontFamily: 'sans-serif', fontStyle: 'bold' }}>
                        <div className="d-flex">
                            <img className="service-img" src={internship} alt="scu-internship-image" style={{ width: '80px', height: '80px' }} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h6 style={{ color: '#212121', fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Internships</strong></h6>
                                <p style={{ color: '#96979B' }}>Gain real world experience while helping us improve our site and software for everyone to enjoy.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img className="service-img" src={training} alt="scu-training-image" style={{ width: '80px', height: '80px' }} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h6 style={{ color: '#212121', fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Training</strong></h6>
                                <p style={{ color: '#96979B' }}>We will teach and mentor you in different subjects like Technology and Career Development.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img className="service-img" src={neighbourhoodCleaning} alt="scu-neighbourhood-cleanup-image" style={{ width: '80px', height: '80px' }} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h6 style={{ color: '#212121', fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Volunteering</strong></h6>
                                <p style={{ color: '#96979B' }}>Cleaning up neighbourhoods to improve the community and make it more appealing for new businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#F5F7FD' }}>
                <h1 className="mb-2 text-center" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}> <strong>Become A Member Today!</strong></h1>
                <span>- Let's Work Together -</span>
                <FaHandshake size={100} />
                <div className="d-flex align-items-center justify-content-center mt-2 rounded" style={{
                    flexDirection: 'column', padding: "20px", backgroundColor: '#0093E9', backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
                }}>

                    <span className="mb-4 text-center" style={{ color: '#fff', fontSize: '20px' }}>
                        You will become a part of the movement to see change in our community by using all our efforts and resources to rebuild, uplift and educate our youths or adults who may need assistance. Join now!
                    </span>
                    <Button variant="danger" size="lg" onClick={() => window.open('https://mailchi.mp/0d937b05404c/membership', '_blank')}>Join Us</Button>
                </div>
            </Row>
        </Container>
    )
}

export default Landing
