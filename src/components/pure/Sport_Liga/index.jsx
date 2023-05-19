import styles from './sport_liga.module.css';

function Sport_Liga() {
    return (
        <div className={styles.sport_liga}>
            <img src="https://1000logos.net/wp-content/uploads/2022/01/Spanish-La-Liga-logo.png" alt="liga" />
            <div className={styles.sport_liga__description}>
                <p className={styles.sport_liga__title}>La Liga</p>
                <p>Spanish La Liga - 3 Matches</p>
            </div>
        </div>
    );
}

export default Sport_Liga;