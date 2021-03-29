

import React from 'react'
import ReactGA from 'react-ga'
import { Container, Jumbotron, Button } from 'react-bootstrap'

//import { useAuth } from "../contexts/FirebaseAuth"

export default function Home() {
    //const { currentUser } = useAuth()

    function handleClick(event){
        console.log("YOU CLICKED TO LEARN MORE!")
        ReactGA.event({category: "Learn More Button", action: "Click"})
        // do something here...
    }

    return (
        <Container>
            <h1>Home</h1>

            <p className="lead">Welcome home...</p>

            <Jumbotron>
                <h2>Hello, world!</h2>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary" onClick={handleClick}>Learn more</Button>
                </p>
            </Jumbotron>
        </Container>
    )
}
