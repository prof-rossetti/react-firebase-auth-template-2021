

import React from 'react'
//import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import { Navbar, Nav, Row, Col, Container, Card, Alert, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

//ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

function Home(){
    return (
        <h1>Home</h1>
    )
}
function About(){
    return (
        <h1>About</h1>
    )
}

export default function App() {
    // ReactGA.pageview(window.location.href)
    return (
        <Router>
            <div className="App">

                <Navbar fixed="top" bg="light" style={{marginBottom:70}}>
                    <Navbar.Brand href="/" style={{fontSize:22}}>My Site</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Container fluid style={{marginTop:70}}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Container>

            </div>
        </Router>
    );
}
