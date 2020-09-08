import React, { useState } from 'react'
import { Carousel, Row, Container, Col } from 'react-bootstrap'
import guys from '../../img/guys.jpg'
import shirt from '../../img/shirt.jpg'
import volunteer from '../../img/volunteer.jpg'
import scu from '../../img/SCU.png'
import { FaHeadset, FaFlask, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import './landing.css'

const Landing = () => {
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
                            className="h-25 d-block w-100 "
                            src={volunteer}
                            alt="First sliimport scu from '../img/SCU.png'
                            de"
                        />
                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%'
                        }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{
                        background: 'no-repeat center center scroll',
                        WebkitBackgroundSize: 'cover',
                        backgroundSize: 'cover'
                    }}>
                        <img
                            className="h-25 d-block w-100 "
                            src={guys}
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%'
                        }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Second slide label</h1>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="h-25 d-block w-100 "
                            src={shirt}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{
                            transform: 'translateY(-50%)',
                            bottom: '0',
                            top: '50%'
                        }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Third slide label</h1>
                            <p >
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#F5F7FD' }}>
                <h1 className="display-4" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Who we are</h1>
                <span>- THE WAY WE WORK IS FUN -</span>
                <p className="text-center">We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque</p>
            </Row>
            <Row className="">
                <div className="col-md-6">
                    <img src={scu} className="img-fluid z-depth-1-half" alt="" />
                </div>
                <div className="col-md-6  d-flex align-items-start justify-content-center" style={{ flexDirection: 'column' }}>

                    <h2 className="h3 mb-3">What We Do</h2>
                    <p>We develop big ideas that sell</p>
                    <hr />
                    <div className="d-flex" style={{ flexDirection: 'column', fontFamily: 'sans-serif', fontStyle: 'bold' }}>
                        <div className="d-flex">
                            <FaFlask color="#D42E22" size={80} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h3>Creative Design</h3>
                                <p>Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FiMonitor color="#D42E22" size={80} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h3>Web Developing</h3>
                                <p>We build mobile apps for the conference, integrating unique content and branding to create.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FaHeadset color="#D42E22" size={80} />
                            <div className="d-flex ml-4" style={{ flexDirection: 'column' }}>
                                <h3>Marketing Support</h3>
                                <p>Google has made this important since 1998 when it launched. Content became, and still is king since websites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#F5F7FD' }}>
                <h1 className="display-4" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Who we are</h1>
                <span>- THE WAY WE WORK IS FUN -</span>
                <div className="mt-5 d-flex flex-wrap">
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FiMonitor size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>WEB DESIGN</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif' }}>Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.</p>
                    </div>
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FaFacebook color="" size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>APP DEVELOPMENT</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif' }}>We build mobile apps for the conference, integrating unique content and branding to create.</p>
                    </div>
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FaYoutube color="" size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>DIGITAL MARKETING</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif' }}>Google has made this important since 1998 when it launched. Content became, and still is king since websites.</p>
                    </div>
                    <div className="col-12 col-md-3  d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="rounded-circle shadow-lg change" style={{ backgroundColor: 'white', padding: '20px' }}>
                            <FaTwitter color="" size={50} />
                        </div>
                        <h6 className="mt-4 text-center text-bold" style={{ fontFamily: 'sans-serif' }}><strong>UI / UX FRIENDLY</strong></h6>
                        <p className="text-center" style={{ fontFamily: 'sans-serif' }}>UX design refers to the term user experience design, while UI design stands for user interface design.</p>
                    </div>
                </div>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#fffff' }}>
                <h1 className="display-4" style={{ fontFamily: 'sans-serif' }}> <strong>MEET OUR TEAM</strong></h1>
                <span>- WE ARE STRONGER -</span>
                <div className="d-flex flex-wrap">
                    <div className="col-md-3 container">
                        <img src={scu} alt="Avatar" className="image" style={{ width: "100%" }} />
                        <div className="middle">
                            <div className="text"><strong>John Doe</strong></div>
                            <div className="text1">Software Engineer</div>
                            <div className="d-flex justify-content-between">
                                <FaFacebook color="#ffffff" size={15} className="mr-2" />
                                <FaYoutube color="#ffffff" size={15} className="mr-2" />
                                <FaTwitter color="#ffffff" size={15} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 container">
                        <img src={scu} alt="Avatar" className="image" style={{ width: "100%" }} />
                        <div className="middle">
                            <div className="text"><strong>Chris Rivee</strong></div>
                            <div className="text1">Social Media Manager</div>

                            <div className="d-flex justify-content-between">
                                <FaFacebook color="#ffffff" size={15} className="mr-2" />
                                <FaYoutube color="#ffffff" size={15} className="mr-2" />
                                <FaTwitter color="#ffffff" size={15} />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 container">
                        <img src={scu} alt="Avatar" className="image" style={{ width: "100%" }} />
                        <div className="middle">
                            <div className="text"><strong>Hari Skae</strong></div>
                            <div className="text1">Director</div>
                            <div className="d-flex justify-content-between">
                                <FaFacebook color="#ffffff" size={15} className="mr-2" />
                                <FaYoutube color="#ffffff" size={15} className="mr-2" />
                                <FaTwitter color="#ffffff" size={15} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 container">
                        <img src={scu} alt="Avatar" className="image" style={{ width: "100%" }} />
                        <div className="middle">
                            <div className="text"><strong>Garry Gile</strong></div>
                            <div className="text1">Moderator</div>
                            <div className="d-flex justify-content-between">
                                <FaFacebook color="#ffffff" size={15} className="mr-2" />
                                <FaYoutube color="#ffffff" size={15} className="mr-2" />
                                <FaTwitter color="#ffffff" size={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Landing


{/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                    <div className="container">

                        <a className="navbar-brand" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
                            <strong>MDB</strong>
                        </a>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank">Free download</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free tutorials</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}