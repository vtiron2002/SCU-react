import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const NewsCard = (props) => {
    const { urlToImage, title, content, url } = props;
    const [state, setState] = useState(false);

    return (

        <div style={{ margin: '10px' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content ? (content.substring(0, 200) + "...") : content}
                    </Card.Text>
                    <a href={url} target="_blank"><Button variant="primary">Read More</Button></a>
                </Card.Body>
            </Card>
        </div >
    )
}

export default NewsCard
