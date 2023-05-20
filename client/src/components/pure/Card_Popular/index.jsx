import styles from './card_popular.module.css';

function Card_Popular({number}) {
    return (
        <div className={styles.card_popular}>
            <span>{number}</span>
            <img src="https://images8.alphacoders.com/999/999690.jpg" alt="img" />
            <div className={styles.card_popular__description}>
                <p>Billie Allish</p>
                <span>Pop</span>
            </div>
        </div>
    );
}

export default Card_Popular;