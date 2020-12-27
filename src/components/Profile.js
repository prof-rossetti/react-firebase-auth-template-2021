

import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Image } from 'react-bootstrap'

import app from "../firebase"
import { useAuth } from "../contexts/FirebaseAuth"

export default function Profile() {
    const { currentUser } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        await app.auth().signOut()
        console.log("LOGOUT SUCCESS")
        history.push("/logout-success")
    }

    return (
        <Container>
            <h1>User Profile</h1>

            <Image roundedCircle src={currentUser.photoURL} alt="user profile"/>

            <p>User Id: {currentUser.uid}</p>
            <p>User Name: {currentUser.displayName}</p>

            <Button variant="link" onClick={handleLogout}>
                Log Out
            </Button>
        </Container>
    )
}
