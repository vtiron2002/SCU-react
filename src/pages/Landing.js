import React, { useState } from 'react'
import { Carousel, Row, Container, Col } from 'react-bootstrap'
import guys from '../img/guys.jpg'
import shirt from '../img/shirt.jpg'
import scu from '../img/SCU.png'

const Landing = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid>
            <Row>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="h-25 d-block w-100 "
                            src={scu}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
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
            <Row className="d-flex flex-row">
                <Col className="w-50" ><img src={scu}></img></Col>
                <Col className="w-50"><img src={scu}></img></Col>
            </Row>
        </Container>
    )
}

export default Landing
