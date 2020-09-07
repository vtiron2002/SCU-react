import React, { useState } from 'react'
import { Carousel, Row, Container, Col } from 'react-bootstrap'
import guys from '../img/guys.jpg'
import shirt from '../img/shirt.jpg'
import scu from '../img/volunteer.jpg'

const Landing = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid>
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
                            src={scu}
                            alt="First slide"
                        />
                        <Carousel.Caption style={{

                            background: 'no-repeat center center scroll',
                            WebkitBackgroundSize: 'cover',
                            backgroundSize: 'cover'
                        }}>
                            <h3>First slide label</h3>
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

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="h-25 d-block w-100 "
                            src={shirt}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: 'lightgray' }}>
                <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Who we are</h1>
                <span>- THE WAY WE WORK IS FUN -</span>
                <p className="text-center">We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque</p>
            </Row>
            <Row className="mt-4">
                <div className="col-md-6 mb-4">

                    <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" className="img-fluid z-depth-1-half" alt="" />

                </div>
                <div className="col-md-6 mb-4">

                    <h3 className="h3 mb-3">Material Design for Bootstrap</h3>
                    <p>This template is created with Material Design for Bootstrap (
              <strong>MDB</strong> ) framework.</p>
                    <p>Read details below to learn more about MDB.</p>

                    <hr />

                    <p>
                        <strong>400+</strong> material UI elements,
              <strong>600+</strong> material icons,
              <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
              <strong>Free for personal and commercial use.</strong>
                    </p>
                    {/*
                        <a target="_blank" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" className="btn btn-indigo btn-md">Download
              <i className="fas fa-download ml-1"></i>
                        </a>
                        <a target="_blank" href="https://mdbootstrap.com/docs/jquery/components/" className="btn btn-indigo btn-md">Live demo
              <i className="far fa-image ml-1"></i>
                        </a> */}

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