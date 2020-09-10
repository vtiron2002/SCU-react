import React, { useState } from 'react'
import { Carousel, Row, Container, Col, Button } from 'react-bootstrap'
import guys from '../../img/guys.jpg'
import shirt from '../../img/shirt.jpg'
import volunteer from '../../img/volunteer.jpg'
import scu from '../../img/SCU.png'
import { FaHeadset, FaFlask, FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { Link } from 'react-router'
import './landing.css'
import TeamMember from './TeamMember'

const Landing = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid >
            <Row className="d-flex flex-col">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item style={{
                        // height: '100vh',
                        // minHeight: '300px',
                        background: 'no-repeat center center scroll',
                        WebkitBackgroundSize: 'cover',
                        backgroundSize: 'cover'
                    }}>
                        <img
                            className="d-block w-100"
                            src={volunteer}
                            style={{ opacity: '0.8' }}
                            alt="First sliimport scu from '../img/SCU.png'
                            de"
                        />
                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%',
                            zIndex: '4'
                        }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold', fontSize: '10vw', color: '#FFFFFF' }}>First slide label</h1>
                            <p style={{ fontSize: '4vw', color: '#FFFFFF' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{
                        background: 'no-repeat center center scroll',
                        WebkitBackgroundSize: 'cover',
                        backgroundSize: 'cover'
                    }}>
                        <img
                            className="d-block w-100 "
                            src={guys}
                            style={{ opacity: '0.8' }}
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%',
                            zIndex: '4'
                        }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold', fontSize: '10vw', color: '#FFFFFF' }}>Second slide label</h1>
                            <p style={{ fontSize: '4vw', color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={shirt}
                            style={{ opacity: '0.8' }}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%',
                            zIndex: '4'
                        }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold', fontSize: '10vw', color: '#FFFFFF' }}>Third slide label</h1>
                            <p style={{ fontSize: '4vw', color: '#FFFFFF' }}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#F5F7FD' }}>
                <h1 className="text-center" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Who We Are</strong></h1>
                <span className="mt-4 mb-4" style={{ fontSize: "18px", color: '#777777', fontStyle: 'bold' }}>- THE WAY WE WORK IS FUN -</span>
                <p className="text-center mb-4" style={{ fontSize: "18px", color: '#96979B' }}>We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque</p>
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
                    <img src={scu} className="img-fluid z-depth-1-half" alt="" />
                </div>
                <div className="col-md-6  d-flex align-items-start justify-content-center" style={{ flexDirection: 'column' }}>

                    <h2 className="mb-2 mt-4" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>What We Do</strong></h2>
                    <span><strong>We empower youths to achieve better future</strong></span>
                    <hr />
                    <div className="d-flex" style={{ flexDirection: 'column', fontFamily: 'sans-serif', fontStyle: 'bold' }}>
                        <div className="d-flex">
                            <FaFlask color="#D42E22" size={80} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h6 style={{ color: '#212121', fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Internships</strong></h6>
                                <p style={{ color: '#96979B' }}>Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FiMonitor color="#D42E22" size={80} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h6 style={{ color: '#212121', fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Trainings</strong></h6>
                                <p style={{ color: '#96979B' }}>We build mobile apps for the conference, integrating unique content and branding to create.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FaHeadset color="#D42E22" size={80} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h6 style={{ color: '#212121', fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Neighbourhood Cleanings</strong></h6>
                                <p style={{ color: '#96979B' }}>Google has made this important since 1998 when it launched. Content became, and still is king since websites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#F5F7FD' }}>
                <h1 className="text-center" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}><strong>Who We Are</strong></h1>
                <span>- THE WORLD AT YOUR FINGERTIPS -</span>
                <div className="mt-5 d-flex flex-wrap">
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FiMonitor size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>WEB DESIGN</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif', color: '#96979B' }}>Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.</p>
                    </div>
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FaFacebook color="" size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>APP DEVELOPMENT</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif', color: '#96979B' }}>We build mobile apps for the conference, integrating unique content and branding to create.</p>
                    </div>
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FaYoutube color="" size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>DIGITAL MARKETING</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif', color: '#96979B' }}>Google has made this important since 1998 when it launched. Content became, and still is king since websites.</p>
                    </div>
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FaTwitter color="" size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>UI / UX FRIENDLY</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif', color: '#96979B' }}>UX design refers to the term user experience design, while UI design stands for user interface design.</p>
                    </div>
                </div>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#fffff' }}>
                <h1 className="mb-2 text-center" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}> <strong>MEET OUR TEAM</strong></h1>
                <span className="mb-4">- WE ARE STRONGER -</span>
                <div className="d-flex flex-wrap">
                    <TeamMember
                        name="John Doe"
                        title="Software Engineer"
                        img={scu}
                    />
                    <TeamMember
                        name="Chris Rivee"
                        title="Social Media Manager"
                        img={scu}
                    />
                    <TeamMember
                        name="Hari Skae"
                        title="Director"
                        img={scu}
                    />
                    <TeamMember
                        name="Garry Gile"
                        title="Moderator"
                        img={scu}
                    />
                </div>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#F5F7FD' }}>
                <h1 className="mb-2 text-center" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}> <strong>Become A Member Today!</strong></h1>
                <span>- Let's Work Together -</span>
                <div className="d-flex align-items-center justify-content-center mt-4 rounded" style={{ flexDirection: 'column', padding: "20px", backgroundColor: '#000000' }}>
                    <span className="mb-4 text-center" style={{ color: '#FFFFFF', fontSize: '20px' }}>
                        You will become a part of the movement to see change in our community by using all our efforts and resources to rebuild, uplift and educate our youths or adults who may need assistance. Join now!
                    </span>
                    <Button variant="danger">Join Us</Button>
                </div>
            </Row>
        </Container>
    )
}

export default Landing