

import React from 'react'
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { AuthProvider } from "../contexts/FirebaseAuth"
import { FlashProvider } from "../contexts/FlashContext"
import ProtectedRoute from "./ProtectedRoute"

import FlashContainer from "./FlashContainer"
import TopNav from "./TopNav"
//import Footer from "./Footer"

import Home from "./Home"
import Products from "./Products"
import About from "./About"
import Login from "./GoogleLogin"
import UserProfile from "./Profile"
import AlertMe from "./AlertMe" // example page for seeing different alert styling options
import FlashForm from "./FlashForm" // example page for testing and debugging the flash

import 'bootstrap/dist/css/bootstrap.min.css'

const GA_TRACKER_ID = process.env.REACT_APP_GA_TRACKER_ID
const GA_DEBUG_MODE = (process.env.REACT_APP_GA_DEBUG_MODE === "true")
ReactGA.initialize(GA_TRACKER_ID, {debug: GA_DEBUG_MODE})

export default function App() {
    ReactGA.pageview(window.location.href)

    return (
        <AuthProvider>
        <FlashProvider>
            <div className="App">
                <TopNav/>

                <Container>
                    <FlashContainer/>

                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/products" component={Products} />
                            <Route exact path="/login" component={Login} />
                            <ProtectedRoute exact path="/profile" component={UserProfile} />

                            <Route path="/alerts" component={AlertMe} />
                            <Route path="/flashes" component={FlashForm} />
                        </Switch>
                    </Router>
                </Container>

                {/* <Footer/> */}
            </div>
        </FlashProvider>
        </AuthProvider>
    )
}
