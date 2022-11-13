import styles from "../sidenav.module.css"
import { NavLink } from "react-router-dom";
import { NavData } from "../data/NavData";
import { useState } from "react";

export default function Sidenav() {
  return (
    <div className = {styles.sidenav}>
        
        {NavData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
    </div>
  )
}