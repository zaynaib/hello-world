import React from "react"
import Main from "../components/main"
import rowStyles from "../components/port-styles.module.css"



export default function Layout() {
  return (
    <Main>
    <div className="wrapper">
      <div className = {rowStyles.row}>
        <div className={rowStyles.one}>one</div>
        <div className={rowStyles.two}>two</div>
        <div className={rowStyles.three}>three</div>
        <div className={rowStyles.four}>four</div>
        <div className={rowStyles.five}>five</div>
      </div>

    
    <div className = {rowStyles.row}>
      <div className={rowStyles.one}>one</div>
      <div className={rowStyles.two}>two</div>
      <div className={rowStyles.three}>three</div>
      <div className={rowStyles.four}>four</div>
      <div className={rowStyles.five}>five</div>
    </div>

    
    <div className = {rowStyles.row}>
      <div className={rowStyles.one}>one</div>
      <div className={rowStyles.two}>two</div>
      <div className={rowStyles.three}>three</div>
      <div className={rowStyles.four}>four</div>
      <div className={rowStyles.five}>five</div>
    </div>



   

    </div>
    
    </Main>
    
   
  )
}