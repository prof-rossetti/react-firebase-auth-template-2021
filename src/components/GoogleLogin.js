

import React from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap'
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
        provider.addScope("https://www.googleapis.com/auth/userinfo.email")         // see: https://developers.google.com/identity/protocols/oauth2/scopes

        await app.auth().signInWithPopup(provider)
        //await app.auth().signInWithRedirect(provider)

        //console.log(result.operationType)
        //
        //var user = result.user
        //console.log("USER:", user)
        ////console.log(user.uid, user.displayName, user.email, user.emailVerified,
        ////    user.phoneNumber, user.photoURL, // user.refreshToken
        ////)
        ////setCurrentUser(user)
        //
        ////var providerId = result.additionalUserInfo.providerId
        ////console.log("PROVIDER:", providerId)
        //var profile = result.additionalUserInfo.profile
        //console.log("USER PROFILE:", profile)
        ////setUserProfile(profile)
        //
        //var token = result.credential.accessToken
        //console.log("ACCESS TOKEN", token)

        console.log("LOGIN SUCCESS")
        flash({message:"Login Success", variant: "success"})
        history.push("/profile")
    }

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px", marginTop: "50px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In w/ Google</h2>

                        <Form onSubmit={handleLogin}>
                            <Button className="w-100" type="submit">
                                Log In w/ Google
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}
