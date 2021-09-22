import styles from './TitleHeader.module.css'



function TitleHeader({ title, name }) {

    return (
        <div className={styles.TitleHeader}> 
            <div className={styles.PageTitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.Divider}>
            </div>
            <div className={styles.UserDetails}>
                <p>{name}</p>
            </div>
            <div className={styles.UserImage}>
                 <img src={`https://avatars.dicebear.com/api/micah/${name}.svg`} alt="User profile"></img>
            </div>
        </div>
    )
}

export default TitleHeader;