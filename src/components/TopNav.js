
import React, {useState} from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap'

import { useAuth } from "../contexts/FirebaseAuth"

import "./TopNav.css"

export default function TopNav() {
    const { currentUser } = useAuth()
    //const [expanded, setExpanded] = useState(false)

    return (
        <Navbar bg="light" // controls nav background color
            fixed="top" // keeps nav at top (not necessary when sticky top is set)
            sticky="top" // pushes page below, prevents overlap when expanded
            expand="sm" // collapse when less wide than this breakpoint
            collapseOnSelect // collapse after a nav link has been clicked
            style={{marginBottom:"15px"}}

            // OVERRIDING DEFAULT BEHAVIOR SO WE CAN DETECT CURRENT TOGGLED STATE
            //expanded={expanded}
            //onToggle={next => setExpanded(next)}

        >
            <Navbar.Brand href="/" style={{fontSize:22}}>My Site</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    {!currentUser &&
                        <Nav.Link href="/login">Login</Nav.Link>
                    }
                </Nav>

               { currentUser &&
                    <Nav.Link href="/profile" className="profile-link">
                        <Image roundedCircle src={currentUser.photoURL} alt="user profile" height="35px"/>
                    </Nav.Link>
                }

            </Navbar.Collapse>
        </Navbar>
    )
}
