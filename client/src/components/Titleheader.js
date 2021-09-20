import React, { useEffect, useState } from 'react'
import styles from './TitleHeader.module.css'
import wretch from 'wretch'


function TitleHeader({ title, name }) {
    const [profileImage, setProfileImage] = useState({})


    async function getProfileImage() {
        const response = await wretch("https://avatars.dicebear.com/api/micah/${name}.svg").get().json()
        setProfileImage(response)
    }

    
    useEffect(() => {
        getProfileImage()
    }, [])

    return (
        <div className={styles.TitleHeader}> 
            <div className={styles.PageTitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.UserDetails}>
                <img src={profileImage} alt="User profile"></img>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default TitleHeader;