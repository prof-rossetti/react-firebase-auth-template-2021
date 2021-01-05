
import React, {useRef} from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import {useFlashUpdate} from "../contexts/FlashContext"

export default function FlashForm() {
    const flash = useFlashUpdate()
    const history = useHistory()

    const messageRef = useRef()
    const variantRef = useRef()

    function handleSubmit(event){
        event.preventDefault()
        const message = messageRef.current.value
        const variant = variantRef.current.value

        const newFlash = {message: message, variant: variant}
        flash(newFlash)
        history.push("/")
    }

    return (
        <Card style={{ maxWidth: "400px", marginTop: "90px"}} >

            <Card.Body>
                <h2 className="text-center mb-4">Flash Form</h2>

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" ref={messageRef} required />
                    </Form.Group>

                    <Form.Group id="variant">
                        <Form.Label>Variant</Form.Label>
                        {/* <Form.Control type="text" ref={variantRef} required /> */}
                        <Form.Control as="select" ref={variantRef}>
                            <option value="dark">dark</option>
                            <option value="light">light</option>
                            <option value="danger">danger</option>
                            <option value="warning">warning</option>
                            <option value="success">success</option>
                            <option value="primary">primary</option>
                            <option value="info">info</option>
                        </Form.Control>
                    </Form.Group>







                    <Button className="w-100" type="submit" onClick={handleSubmit}>
                        Set Flash
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
