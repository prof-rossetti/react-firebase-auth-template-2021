
import React, {useContext} from 'react'

import AlertDismissable from "./AlertDismissable"

import {FlashContext} from "../contexts/FlashContext"

export default function FlashContainer() {
    const flashes = useContext(FlashContext)
    console.log("PROVIDED FLASHES:", flashes)

    if (flashes && flashes.length > 0) {
        return flashes.map(function({message, variant}){
            return <AlertDismissable key={message} message={message} variant={variant} />
        })
    } else {
        return <p>No flash</p>
    }
}
