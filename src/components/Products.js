

import React from 'react'
import ReactGA from 'react-ga'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import {fetchProducts} from "../firebase"

function ProductCard(props) {
    const title = props.title || props.name || "Product XYZ"
    const description = props.description || "An amazing product anyone would love to buy!"
    const imgSrc = props.imgSrc || props.image_url || "https://picsum.photos/180/100"

    fetchProducts()

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
                <Card.Text>{description}</Card.Text>
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
                {/* for product in products: */}
                <Col>
                    <ProductCard key="row-card-1" name="Product 1" imgSrc="https://picsum.photos/id/1080/360/200"/>
                </Col>

                <Col>
                    <ProductCard key="row-card-2" name="Product 2" imgSrc="https://picsum.photos/id/225/360/200"/>
                </Col>
                <Col>
                    <ProductCard key="row-card-3" name="Product 3" imgSrc="https://picsum.photos/id/24/360/200"/>
                </Col>
            </Row>
        </Container>
    )
}
