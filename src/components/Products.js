

import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'

//import { useAuth } from "../contexts/FirebaseAuth"

function ExampleCard(props) {
    const title = props.title || "Card Title"

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/180/100" />
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
                <ExampleCard key="row-card-1" title="Product 1"/>
                <ExampleCard key="row-card-2" title="Product 2"/>
                <ExampleCard key="row-card-3" title="Product 3"/>
            </Row>

        </Container>
    )
}
