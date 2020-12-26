
import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import app from "../firebase"
import { useAuth } from "../contexts/FirebaseAuth"

export default function TopNav() {
    const { currentUser } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        await app.auth().signOut()
        console.log("LOGOUT SUCCESS")
        history.push("/logout-success")
    }

    return (
        <Navbar fixed="top" bg="light" style={{marginBottom:70}}>
            <Navbar.Brand href="/" style={{fontSize:22}}>My Site</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    {currentUser ?
                        <Button variant="link" onClick={handleLogout}>
                            Log Out
                        </Button>
                    :
                        <Nav.Link href="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
