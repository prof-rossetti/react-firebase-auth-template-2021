

import React, {PureComponent} from 'react'
import { useHistory } from 'react-router-dom'
import ReactGA from 'react-ga'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import {fetchProducts} from "../firebase"
import { useAuth } from "../contexts/FirebaseAuth"
import { useFlashUpdate } from "../contexts/FlashContext"

function ProductCard(props) {
    const product = props.product
    //const title = props.title || "Product XYZ"
    //const description = props.description || "An amazing product anyone would love to buy!"
    //const imgSrc = props.imgSrc || "https://picsum.photos/180/100"

    const { currentUser } = useAuth()
    const flash = useFlashUpdate()
    const history = useHistory()

    function handleClick(){
        console.log("YOU CLICKED PRODUCT:", product.name)
        ReactGA.event({category: "Product", action: "Click", label: product.name})

        if(currentUser){
            console.log("----------------------")
            console.log("SENDING THE ORDER...")
            console.log("USER:", currentUser.uid, currentUser.email)
            console.log("PRODUCT:", product.id, product.name)


        } else {
            flash({message:"Oh, to order you must be logged in!", variant: "warning"})
            history.push("/login")
        }
    }

    return (
        <Card style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src={product.image_url} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" onClick={handleClick}>Order now!</Button>
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
                    <ProductCard key={product.id} product={product}/>
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
