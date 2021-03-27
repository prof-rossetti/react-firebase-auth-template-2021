

import React, {PureComponent} from 'react'
import ReactGA from 'react-ga'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import {fetchProducts} from "../firebase"

function ProductCard(props) {
    const title = props.title || props.name || "Product XYZ"
    const description = props.description || "An amazing product anyone would love to buy!"
    const imgSrc = props.imgSrc || props.image_url || "https://picsum.photos/180/100"

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

export default class Products extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {products: []}
    }

    render() {
        var cols = this.state.products.map((product) => {
            return (
                <Col key={product.id}>
                    <ProductCard key={product.id}
                        title={product.name}
                        description={product.description}
                        imgSrc={product.image_url}
                    />
                </Col>
            )
        })

        return (
            <Container>
                <h1>Products</h1>

                <p className="lead">Browse products and services...</p>

                <Row>
                    {cols}
                </Row>
            </Container>
        )
    }

    async componentDidMount(){
        console.log("PRODUCTS PAGE DID MOUNT")
        var products = await fetchProducts()
        console.log("MOUNTED WITH", products.length, "PRODUCTS")
        this.setState({products: products})
    }

}
