

import React from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap'
//import GoogleButton from 'react-google-button'
import { useHistory } from 'react-router-dom'
import firebase from "firebase/app"

import app from "../firebase"
import { useFlashUpdate } from "../contexts/FlashContext"

export default function GoogleLogin() {
    const flash = useFlashUpdate()
    const history = useHistory()

    async function handleLogin(event) {
        event.preventDefault()

        var provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope("https://www.googleapis.com/auth/userinfo.email") // see: https://developers.google.com/identity/protocols/oauth2/scopes

        const result = await app.auth().signInWithPopup(provider)
        //const result = await app.auth().signInWithRedirect(provider)

        var user = result.user
        var providerId = result.additionalUserInfo.providerId
        var profile = result.additionalUserInfo.profile
        var token = result.credential.accessToken
        console.log("USER:", user) // user.uid, user.displayName, user.email, user.emailVerified, user.phoneNumber, user.photoURL, user.refreshToken
        console.log("PROVIDER:", providerId)
        console.log("USER PROFILE:", profile)
        console.log("ACCESS TOKEN", token)
        // TODO: store this user info in the database, perhaps firestore

        console.log("LOGIN SUCCESS")
        flash({message:"Login Success", variant: "success"})
        history.push("/profile")
    }

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px", marginTop: "50px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>

                        <Form onSubmit={handleLogin}>
                            <Button className="w-100" type="submit">
                                Log In w/ Google
                            </Button>
                        </Form>

                        {/* <GoogleButton onClick={handleLogin} label="Log In w/ Google" /> */}

                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}
