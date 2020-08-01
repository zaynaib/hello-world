import React from "react"

import { Link } from "gatsby"
import Header from "./header.js"
import containerStyles from "./container.module.css"



export default function Container({ children }) {
  return (
    <div className={containerStyles.container}>
        {children}
    </div>
  )
}