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
