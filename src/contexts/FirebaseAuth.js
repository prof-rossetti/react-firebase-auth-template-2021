import React, { useContext, useState, useEffect } from "react"
import app from "../firebase"

const AuthContext = React.createContext()

export function useAuth() { return useContext(AuthContext) }

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged(user => {
            console.log("AUTH STATE CHANGED!")
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    //if(loading){
    //    return <>Authentication Pending...</>
    //}

    return (
        <AuthContext.Provider value={{currentUser}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
