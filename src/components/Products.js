

import React from 'react'
import ReactGA from 'react-ga'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

//import { useAuth } from "../contexts/FirebaseAuth"

function ProductCard(props) {
    const title = props.title || "Product XYZ"
    const imgSrc = props.imgSrc || "https://picsum.photos/180/100"

    function handleClick(event){
        console.log("YOU CLICKED PRODUCT:", title)
        ReactGA.event({category: "Product", action: "Click", label: title})
        // and probably do something else here ...
    }

    return (
        <Card style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>

                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
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
                    <ProductCard key="row-card-1" title="Product 1" imgSrc="https://picsum.photos/id/1080/360/200"/>
                </Col>
                <Col>
                    <ProductCard key="row-card-2" title="Product 2" imgSrc="https://picsum.photos/id/225/360/200"/>
                </Col>
                <Col>
                    <ProductCard key="row-card-3" title="Product 3" imgSrc="https://picsum.photos/id/24/360/200"/>
                </Col>
            </Row>
        </Container>
    )
}
