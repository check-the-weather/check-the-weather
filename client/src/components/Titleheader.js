import React, { useEffect, useState } from 'react'
import styles from './TitleHeader.module.css'
import wretch from 'wretch'


function TitleHeader({ title, name }) {

    return (
        <div className={styles.TitleHeader}> 
            <div className={styles.PageTitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.UserImage}>
                 <img src={`https://avatars.dicebear.com/api/micah/${name}.svg`} alt="User profile"></img>
            </div>
            <div className={styles.UserDetails}>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default TitleHeader;