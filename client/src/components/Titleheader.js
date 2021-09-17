import React from 'react'
import styles from './Titleheader.module.css'

function Titleheader({name}){
    return(
    <div className={styles.Overview}> 
        <div className={styles.PageTitle}>
            <h1>Overview</h1>
        </div>
        <div className={styles.UserDetails}>
            <p>{name}</p>
        </div>
    </div>
    )
}

export default Titleheader;