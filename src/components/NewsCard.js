import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const NewsCard = (props) => {
    const { urlToImage, title, content, url } = props;

    return (


        <Card style={{ flex: '1 1 1', width: '18rem', margin: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '0px' }}>
            <Card.Img variant="top" src={urlToImage} style={{ width: '100%', height: '200px' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ fontSize: '16px' }}>
                    {content ? (content.substring(0, 100) + "...") : content}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a href={url} target="_blank" rel="noopener noreferrer"><Button variant="primary">Read More</Button></a>
            </Card.Footer>
        </Card>
    )
}

export default NewsCard
