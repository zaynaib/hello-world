import React from "react"
import Header from "./header.js"

import styles from "../style/tut-styles.css"

export default function Main({ children }) {
  return (
    <div >
    <Header></Header>

      {children}

   
    </div>
  )
}