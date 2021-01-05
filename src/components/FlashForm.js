
import React, {useRef} from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import {useFlashUpdate} from "../contexts/FlashContext"

export default function FlashForm() {
    const flash = useFlashUpdate()
    const history = useHistory()

    const messageRef = useRef()
    const variantRef = useRef()
    const redirectRef = useRef()

    function handleSubmit(event){
        event.preventDefault()
        const message = messageRef.current.value
        const variant = variantRef.current.value
        const redirectPath = redirectRef.current.value

        const newFlash = {message: message, variant: variant}
        flash(newFlash)
        if(redirectPath){
            history.push(redirectPath)
        }

    }

    return (
        <Card style={{ maxWidth: "400px", marginTop: "50px"}} >

            <Card.Body>
                <h2 className="text-center mb-4">Flash Form</h2>

                <Form>
                    <Form.Group id="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" ref={messageRef} required placeholder="This is a message!" />
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

                    <Form.Group id="redirectPath">
                        <Form.Label>Redirect Path (optional)</Form.Label>
                        <Form.Control type="text" ref={redirectRef} placeholder="/flashes" />
                    </Form.Group>

                    <Button variant={"primary"} className="w-100" type="submit" onClick={handleSubmit}>
                        Set Flash
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
