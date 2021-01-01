
import React, {useRef, useContext} from 'react'
import {Button, Card, Form} from 'react-bootstrap'

import {FlashContext} from "../contexts/FlashContext"

export default function FlashMe() {
    const [flashes, setFlashes] = useContext(FlashContext)
    console.log(flashes)

    const messageRef = useRef()
    const variantRef = useRef()

    function handleSubmit(event){
        event.preventDefault()
        const message = messageRef.current.value
        const variant = variantRef.current.value

        const newFlash = {message: message, variant: variant}
        console.log("NEW FLASH:", newFlash)
        //setFlashes([newFlash])
        //setFlashes(state => ({ ...state, flashes: [newFlash] }))
    }

    return (
        <Card style={{ maxWidth: "400px", marginTop: "50px"}} >

            <Card.Body>
                <h2 className="text-center mb-4">Flash Form</h2>

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" ref={messageRef} required />
                    </Form.Group>

                    <Form.Group id="variant">
                        <Form.Label>Variant</Form.Label>
                        <Form.Control type="text" ref={variantRef} required />
                    </Form.Group>

                    <Button className="w-100" type="submit" onClick={handleSubmit}>
                        Set Flash
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
