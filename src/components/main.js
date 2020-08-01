import React from "react"
import Header from "./header.js"

import styles from "../style/styles.css"
import Footer from "./footer.js"

export default function Main({ children }) {
  return (
    <div >
    <Header></Header>

      {children}
    <Footer></Footer>
    </div>
  )
}