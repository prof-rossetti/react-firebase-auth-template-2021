






import React, { useState } from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import firebase from "firebase/app"
//import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"

export default function GoogleLogin() {
    const history = useHistory()

    const [, setCurrentUser] = useState()
    const [, setAlert] = useState()

    async function handleLogin(event) {
        event.preventDefault()

        var provider = new firebase.auth.GoogleAuthProvider()

        // see: https://developers.google.com/identity/protocols/oauth2/scopes
        provider.addScope("https://www.googleapis.com/auth/userinfo.email")
        //provider.addScope("profile")
        //provider.addScope("email")
        //provider.addScope("openid")

        auth.signInWithPopup(provider).then(function(result) {
            //console.log(result)
            //console.log(result.operationType)

            var token = result.credential.accessToken
            console.log("ACCESS TOKEN", token)

            var user = result.user
            console.log("USER:", user)
            //console.log(user.uid, user.displayName, user.emailuser.emailVerified,
            //    user.phoneNumber, user.photoURL, // user.refreshToken
            //)
            setCurrentUser(user)

            var providerId = result.additionalUserInfo.providerId
            console.log("PROVIDER:", providerId)

            var profile = result.additionalUserInfo.profile
            console.log("USER PROFILE:", profile)

            //history.push("/login-success")
            setAlert("LOGIN SUCCESS!")
            history.push("/")

        }).catch(function(error) {
            console.error(error)
            //var errorCode = error.code
            //var errorMessage = error.message
            //var email = error.email // The email of the user's account used.
            //var credential = error.credential // The firebase.auth.AuthCredential type that was used.
            setAlert("LOGIN FAILURE. PLEASE TRY AGAIN.")
            history.push("/")
        })
    }

    async function handleLogout() {
        await auth.signOut()
        console.log("LOGOUT SUCCESS")
        history.push("/logout-success")
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


                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log Out</h2>

                        <Form onSubmit={handleLogout}>
                            <Button className="w-100" type="submit">
                                Log Out
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}
