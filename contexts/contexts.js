import { createContext } from "react";


const usercontext = createContext(null)
const imageContext = createContext(null)
const panierContext = createContext(null)

export {
    imageContext,
    usercontext,
    panierContext
}