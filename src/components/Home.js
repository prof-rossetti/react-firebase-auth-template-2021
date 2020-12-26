

import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

export default function Home() {

    const [currentUser, ] = useState()
    const [alert, ] = useState()

    return (
        <div>
            {alert && <Alert variant="danger">{alert}</Alert>}

            {currentUser ?
                <h1>Welcome, {currentUser.displayName}</h1>
                :
                <h1>Home</h1>
            }
        </div>
    )
}
