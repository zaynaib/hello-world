import React from "react"
import Header from "./header.js"

import styles from "../styles/styles.css"
import Footer from "./footer.js"

export default function Main({ children }) {
  return (
    <div >
    <Header></Header>
    <div className="wrapper">
      {children}
     </div>
    <Footer></Footer>
    </div>
  )
}