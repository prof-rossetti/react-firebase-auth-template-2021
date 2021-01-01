import React, { useState } from "react"

const FlashContext = React.createContext([{}, () => {}]) // pass empty object and function, for the results of the useState hook

function FlashProvider({ children }) {
    const [flashes, setFlashes] = useState([
        {message:"Hello", variant:"info"},
        {message:"Goodbye", variant:"dark"}
    ])

    return (
        <FlashContext.Provider value={[flashes, setFlashes]}>
            {children}
        </FlashContext.Provider>
    )
}

export { FlashContext, FlashProvider }
