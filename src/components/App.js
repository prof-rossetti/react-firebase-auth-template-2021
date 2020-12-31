

import React from 'react'
//import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { AuthProvider } from "../contexts/FirebaseAuth"
import { FlashProvider } from "../contexts/Flash"
import ProtectedRoute from "./ProtectedRoute"

import TopNav from "./TopNav"
import Home from "./Home"
import Products from "./Products"
import About from "./About"
import Login from "./GoogleLogin"
import Profile from "./Profile"

import AlertMe from "./AlertMe"
import FlashMe from "./FlashMe"

import 'bootstrap/dist/css/bootstrap.min.css'

//ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

export default function App() {
    // ReactGA.pageview(window.location.href)

    return (
        <AuthProvider>
        <FlashProvider>

            <Router>
                <div className="App">
                    <TopNav/>

                    <Container fluid style={{marginTop:70}}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/products" component={Products} />
                            <Route exact path="/login" component={Login} />
                            <ProtectedRoute exact path="/profile" component={Profile} />

                            <Route path="/alerts" component={AlertMe} />
                            <Route path="/flashes" component={FlashMe} />

                        </Switch>
                    </Container>
                </div>
            </Router>

        </FlashProvider>
        </AuthProvider>
    )
}
