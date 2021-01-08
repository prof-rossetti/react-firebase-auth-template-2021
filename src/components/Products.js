

import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

//import { useAuth } from "../contexts/FirebaseAuth"

function ExampleCard(props) {
    const title = props.title || "Card Title"
    const imgSrc = props.imgSrc || "https://picsum.photos/180/100"

    return (
        <Card style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>

                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default function Products() {
    //const { currentUser } = useAuth()

    return (
        <Container>
            <h1>Products</h1>

            <p className="lead">Browse products and services...</p>

            <Row>
                <Col>
                    <ExampleCard key="row-card-1" title="Product 1" imgSrc="https://picsum.photos/id/1080/360/200"/>
                </Col>
                <Col>
                    <ExampleCard key="row-card-2" title="Product 2" imgSrc="https://picsum.photos/id/225/360/200"/>
                </Col>
                <Col>
                    <ExampleCard key="row-card-3" title="Product 3" imgSrc="https://picsum.photos/id/24/360/200"/>
                </Col>
            </Row>
        </Container>
    )
}
