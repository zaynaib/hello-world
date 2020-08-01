import React from "react"
import Main from "../components/main"
import mainStyles from "../style/tut-styles.css"
import rowStyles from "../components/port-styles.module.css"



export default function Layout() {
  return (
    <Main>
    <div className="wrapper">
    <div className = {rowStyles.row}>
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
    <div>five</div>
    </div>

    
    <div className = {rowStyles.row}>
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
    <div>five</div>
    </div>

    
    <div className = {rowStyles.row}>
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
    <div>five</div>
    </div>



   

    </div>
    
    </Main>
    
   
  )
}