//import React, { useContext, useState, useEffect } from "react"
//
//const FlashContext = React.createContext()
//
//export function useFlash() { return useContext(FlashContext) }
//
//export function FlashProvider({ children }) {
//    const [flash, ] = useState("EXAMPLE FLASH")
//
//    //useEffect(() => {
//    //    console.log("FLASH:", flash)
//    //}, [flash])
//
//    return (
//        <FlashContext.Provider value={{flash}}>
//            {children}
//        </FlashContext.Provider>
//    )
//}
//
