

import React, {PureComponent} from 'react'
import { useHistory } from 'react-router-dom'
import ReactGA from 'react-ga'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import {fetchProducts, orderProduct} from "../firebase"
import { useAuth } from "../contexts/FirebaseAuth"
import { useFlashUpdate } from "../contexts/FlashContext"

function ProductCard(props) {
    const product = props.product

    const { currentUser } = useAuth()
    const flash = useFlashUpdate()
    const history = useHistory()

    async function handleClick(){
        console.log("YOU CLICKED PRODUCT:", product.name)
        ReactGA.event({category: "Product", action: "Click", label: product.name})

        if(currentUser){
            var results = await orderProduct(currentUser, product)
            console.log(results)

            flash({message:"Order Successful!", variant: "success"})
            history.push("/profile#orders")
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
                    <ProductCard product={product}/>
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
        //console.log("MOUNTED WITH", products.length, "PRODUCTS")
        this.setState({products: products})
    }

}
