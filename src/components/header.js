import React from "react"
import { Link } from "gatsby"

import headerStyles from "./tut-styles.module.css"
export default function Header() {
  return (
    <header>

        <h1>
        <Link  to="/">Name of My Site</Link>

        </h1>


    </header>
  )
}