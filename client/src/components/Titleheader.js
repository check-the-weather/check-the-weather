import React from 'react'
import styles from './TitleHeader.module.css'
import wretch from 'wretch'


async function TitleHeader({ title, name }) {
        const profileImage = await wretch('https://avatars.dicebear.com/api/micah/'+ name +'.svg').get().json()

    return (
        <div className={styles.TitleHeader}> 
            <div className={styles.PageTitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.UserDetails}>
                <img src = {profileImage} > </img>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default TitleHeader;