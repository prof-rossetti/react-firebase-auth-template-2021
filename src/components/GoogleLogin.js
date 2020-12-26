






import React, {useState, useRef} from 'react'
import { Navbar, Nav, Row, Col, Container, Card, Alert, Button, Form } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

import firebase from "firebase/app"
//import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"

export default function GoogleLogin() {
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()

        var provider = new firebase.auth.GoogleAuthProvider()

        // see: https://developers.google.com/identity/protocols/oauth2/scopes
        provider.addScope("https://www.googleapis.com/auth/userinfo.email")
        //provider.addScope("profile")
        //provider.addScope("email")
        //provider.addScope("openid")

        auth.signInWithPopup(provider).then(function(result) {
            console.log(result)

            console.log(result.operationType)

            var token = result.credential.accessToken
            console.log("ACCESS TOKEN", token)

            var user = result.user
            console.log("USER:", user)
            //console.log(user.uid, user.displayName, user.emailuser.emailVerified,
            //    user.phoneNumber, user.photoURL, // user.refreshToken
            //)

            var providerId = result.additionalUserInfo.providerId
            console.log(providerId)

            var profile = result.additionalUserInfo.profile
            console.log(profile)


            history.push("/login-success")

        }).catch(function(error) {
            console.error(error)
            //var errorCode = error.code
            //var errorMessage = error.message
            //var email = error.email // The email of the user's account used.
            //var credential = error.credential // The firebase.auth.AuthCredential type that was used.
        })

        // THIS WILL GET REACHED WHILE THE USER IS PROBABLY STILL SIGNING IN.
        // IT HAPPENS ASYNC
        //console.log("LOGIN IN PROGRESS..")
    }

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px", marginTop: "50px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In w/ Google</h2>

                        <Form onSubmit={handleSubmit}>
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
