

import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

//import { useAuth } from "../contexts/FirebaseAuth"

export default function Home() {
    //const { currentUser } = useAuth()

    return (
        <Container>
            <h1>Home</h1>

            <p class="lead">Welcome home...</p>

            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/180/100" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </Container>
    )
}
