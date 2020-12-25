


import React, {useState, useRef} from 'react'
import { Navbar, Nav, Row, Col, Container, Card, Alert, Button, Form } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'


export default function Login(props) {
    var error = props.error || ""

    const history = useHistory()

    const emailRef = useRef()
    //const passwordRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        try {
            console.log(emailRef.current.value)
            history.push("/")
        } catch {
            console.error("OOPS")
        }

        console.log("SUCCESS")
    }

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px", marginTop: "50px"}}>

                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Button className="w-100" type="submit">
                            Log In
                            </Button>
                        </Form>

                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Card.Body>
                </Card>

                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>

            </div>
        </Container>
    )
}
