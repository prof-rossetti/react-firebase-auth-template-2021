

import React, {PureComponent} from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Card, Button, Image, Tab, Nav, Row, Col, Table } from 'react-bootstrap'

import app, {fetchOrders} from "../firebase"
import { useAuth } from "../contexts/FirebaseAuth"
import { useFlashUpdate } from "../contexts/FlashContext"

function AccountTab(props){
    const user = props.user

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
                                    src={user.photoURL}
                                    alt="user profile"
                                    style={{
                                        marginBottom:15,
                                        display:"block",
                                        marginLeft:"auto",
                                        marginRight:"auto",

                                    }}
                                    //height="65px"
                                />

                            <div>Name: <pre>{user.displayName}</pre></div>
                            <div>Email: <pre>{user.email}</pre></div>
                            <div>User Id: <pre>{user.uid}</pre></div>
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

class OrdersTab extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {orders: []}
    }

    render(){
        var rows = this.state.orders.map((order) => {
            var orderDate = new Date(parseInt(order.orderAt))

            return (
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.productName}</td>
                    <td>{order.productPrice}</td>
                    <td>{orderDate.toLocaleString()}</td>
                </tr>
            )
        })

        return (
            <>
                <h2>Order History</h2>
                <p className="lead">Here are your recent orders...</p>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>

            </>
        )
    }

    async componentDidMount(){
        console.log("ORDERS TAB DID MOUNT")
        var orders = await fetchOrders(this.props.user)
        //console.log("MOUNTED WITH", products.length, "PRODUCTS")
        this.setState({orders: orders})
    }
}

export default function Profile() {
    const { currentUser } = useAuth()

    //console.log("WINDOW LOCATION", window.location)
    var activeTabKey = "account"
    if(window.location.hash === "#orders"){
        activeTabKey = "orders"
    }

    return (
        <Container>
            <h1>User Profile</h1>

            <Tab.Container id="left-tabs-example" defaultActiveKey={activeTabKey} transition={false}>
                <Nav variant="tabs" style={{marginBottom:"1em"}}>
                    <Nav.Item>
                        <Nav.Link eventKey="account">Account</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="orders">Orders</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="account">
                        <AccountTab user={currentUser}/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="orders">
                        <OrdersTab user={currentUser}/>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    )
}
