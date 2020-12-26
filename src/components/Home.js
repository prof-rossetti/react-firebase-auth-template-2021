

import React from 'react'
//import { Alert } from 'react-bootstrap'

import { useAuth } from "../contexts/FirebaseAuth"

export default function Home() {
    const { currentUser } = useAuth()

    return (
        <div>

            {currentUser ?
                <h1>Welcome, {currentUser.displayName}</h1>
                :
                <h1>Home</h1>
            }
        </div>
    )
}
