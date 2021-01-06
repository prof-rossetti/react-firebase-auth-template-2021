
import React from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap'
//import {GearIcon} from '@primer/octicons-react'

import { useAuth } from "../contexts/FirebaseAuth"

export default function TopNav() {
    const { currentUser } = useAuth()

    return (
        <Navbar fixed="top" bg="light" style={{marginBottom:70}}
            collapseOnSelect expand="sm"
            sticky="top" // pushes page below, prevents overlap when expanded
        >
            <Navbar.Brand href="/" style={{fontSize:22}}>My Site</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>

                    {/* <GearIcon size="medium"/> */}

                    {!currentUser &&
                        <Nav.Link href="/login">Login</Nav.Link>
                    }

                </Nav>

                { currentUser &&
                    <Nav.Link href="/profile">
                        <Image roundedCircle
                            src={currentUser.photoURL}
                            alt="user profile"
                            height="35px"
                        />
                    </Nav.Link>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}
