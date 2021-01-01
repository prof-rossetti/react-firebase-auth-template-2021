
import React from 'react'
//import {} from 'react-bootstrap'

//import { useFlash, FlashProvider } from "../contexts/Flash"

import AlertDismissable from "./AlertDismissable"

const flashes = [
    {message:"Hello", variant:"info"},
    {message:"Goodbye", variant:"dark"}
]

export default function FlashContainer() {
    //const { currentFlash } = useFlash()

    return flashes.map(function({message, variant}){
        return <AlertDismissable key={message} message={message} variant={variant} />
    })
}
