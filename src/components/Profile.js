

import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Card, Button, Image, Tab, Nav, Row, Col, Table } from 'react-bootstrap'

import app from "../firebase"
import { useAuth } from "../contexts/FirebaseAuth"
import { useFlashUpdate } from "../contexts/FlashContext"

function AccountTab(){
    const { currentUser } = useAuth()
    const flash = useFlashUpdate()
    const history = useHistory()

    async function handleLogout() {
        await app.auth().signOut()
        console.log("LOGOUT SUCCESS")
        flash({message:"Logout success. Have a nice day!", variant: "success"})
        history.push("/login")
    }

    return (
        <>
            <h2>Account Info</h2>
            <p className="lead">You are logged in as...</p>

            <Container className="d-flex align-items-center justify-content-center">
                <div className="w-100" style={{ maxWidth: "400px"}}>
                    <Card >
                        <Card.Body>
                            <Image roundedCircle
                                    src={currentUser.photoURL}
                                    alt="user profile"
                                    style={{
                                        marginBottom:15,
                                        display:"block",
                                        marginLeft:"auto",
                                        marginRight:"auto",

                                    }}
                                    //height="65px"
                                />

                            <div>Name: <pre>{currentUser.displayName}</pre></div>
                            <div>Email: <pre>{currentUser.email}</pre></div>
                            <div>User Id: <pre>{currentUser.uid}</pre></div>
                        </Card.Body>
                    </Card>

                    <Button variant="link" onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>
            </Container>
        </>
    )
}

function OrdersTab(){

    return (
        <>
            <h2>Order History</h2>
            <p className="lead">Here are your recent orders...</p>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </>
    )
}

export default function Profile() {

    return (
        <Container>
            <h1>User Profile</h1>

            <Tab.Container id="left-tabs-example" defaultActiveKey="account" transition={false}>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="account">Account</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="orders">Orders</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="account">
                                <AccountTab/>
                            </Tab.Pane>

                            <Tab.Pane eventKey="orders">
                                <OrdersTab/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </Container>
    )
}
