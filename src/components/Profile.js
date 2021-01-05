

import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Card, Button, Image } from 'react-bootstrap'

import app from "../firebase"
import { useAuth } from "../contexts/FirebaseAuth"
import { useFlashUpdate } from "../contexts/FlashContext"

export default function Profile() {
    const { currentUser } = useAuth()
    const flash = useFlashUpdate()
    const history = useHistory()

    async function handleLogout() {
        await app.auth().signOut()
        console.log("LOGOUT SUCCESS")
        flash({message:"Logout Success", variant: "success"})
        history.push("/login")
    }

    return (
        <Container>
            <h1>User Profile</h1>

            <p className="lead">You are logged in as...</p>

            <Card style={{ width: '18rem' }}>
                <Card.Body>

                    <Image roundedCircle
                            src={currentUser.photoURL}
                            alt="user profile"
                            style={{
                                marginBottom:15,
                                display:"block",
                                marginLeft:"auto",
                                marginRight:"auto",

                            }}
                            //height="65px"
                        />

                    <Card.Text>Name: <pre>{currentUser.displayName}</pre></Card.Text>
                    <Card.Text>Email: <pre>{currentUser.email}</pre></Card.Text>
                    <Card.Text>User Id: <pre>{currentUser.uid}</pre></Card.Text>
                </Card.Body>
            </Card>

            <Button variant="link" onClick={handleLogout}>
                Log Out
            </Button>
        </Container>
    )
}
