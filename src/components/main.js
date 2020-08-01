import React from "react"
import Header from "./header.js"

export default function Main({ children }) {
  return (
    <div >
    <Header></Header>

      {children}

   
    </div>
  )
}