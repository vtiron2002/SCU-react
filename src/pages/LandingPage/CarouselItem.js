import React from 'react'
import { Carousel, Row, Container, Col } from 'react-bootstrap'

const CarouselItem = ({ img, alt, heading, subHeading }) => {
    return (
        <Carousel.Item style={{
            // height: '100vh',
            // minHeight: '300px',
            background: 'no-repeat center center scroll',
            WebkitBackgroundSize: 'cover',
            backgroundSize: 'cover'
        }}>
            <img
                className="h-25 d-block w-100 "
                src={img}
                alt={alt}
            />
            <Carousel.Caption style={{
                transform: 'translateY(-50%)',
                bottom: '0',
                top: '50%'
            }}>
                <h1 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>{heading}</h1>
                <p>{subHeading}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default CarouselItem

/**
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

 */