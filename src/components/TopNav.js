
import React, {useState} from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap'

import { useAuth } from "../contexts/FirebaseAuth"

export default function TopNav() {
    const { currentUser } = useAuth()
    //const [expanded, setExpanded] = useState(false)

    //function overrideToggle() {
    //    console.log("TOGGLE TRIGGERED...")
    //    setExpanded(prevExpanded => !prevExpanded)
    //}

    // re-center nav links vertically
    // b/c image makes nav taller than normal
    // https://stackoverflow.com/a/35434588/670433
    const linkStyle = {height:"35px", lineHeight:"35px"}

    return (
        <Navbar bg="light" // controls nav background color
            fixed="top" // keeps nav at top (not necessary when sticky top is set)
            sticky="top" // pushes page below, prevents overlap when expanded
            expand="sm" // collapse when less wide than this breakpoint
            collapseOnSelect // collapse after a nav link has been clicked
            style={{marginBottom:"15px"}}

            // OVERRIDING DEFAULT BEHAVIOR SO WE CAN DETECT CURRENT TOGGLED STATE
            //expanded={expanded}
            //onToggle={overrideToggle}
            //onToggle={next => setExpanded(next)}

        >
            <Navbar.Brand href="/" style={{fontSize:22}}>My Site</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link style={linkStyle} href="/products">Products</Nav.Link>
                    <Nav.Link style={linkStyle} href="/about">About</Nav.Link>
                    {!currentUser &&
                        <Nav.Link style={linkStyle} href="/login">Login</Nav.Link>
                    }

                    { currentUser &&
                        <Nav.Link href="/profile">
                            <Image roundedCircle src={currentUser.photoURL} alt="user profile" height="35px"/>
                        </Nav.Link>
                    }
                </Nav>

                {/* currentUser &&
                    <Nav.Link href="/profile" style={ expanded ? {paddingLeft:"0px"} : {paddingLeft: "1rem"}}>
                        <Image roundedCircle
                            src={currentUser.photoURL}
                            alt="user profile"
                            height="35px"
                        />
                    </Nav.Link>
                */}

                {/* currentUser && (expanded ?
                        <p>Expanded</p> : <p>Not expanded (Visible)</p>
                    )
                */}

            </Navbar.Collapse>
        </Navbar>
    )
}
