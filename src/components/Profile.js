

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
        flash({message:"Logout success. Have a nice day!", variant: "success"})
        history.push("/login")
    }

    return (
        <Container>
            <h1>User Profile</h1>

            <p className="lead">You are logged in as...</p>

            <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px"}}>

                <Card >
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

                        <div>Name: <pre>{currentUser.displayName}</pre></div>
                        <div>Email: <pre>{currentUser.email}</pre></div>
                        <div>User Id: <pre>{currentUser.uid}</pre></div>
                    </Card.Body>
                </Card>

                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
            </Container>
        </Container>
    )
}
