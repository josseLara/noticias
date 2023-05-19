import { useSelector } from 'react-redux';
import styles from './min_card.module.css';

function Min_Card({ newData,number }) {

    return (
        <div className={styles.min_card}>
            {/* img */}
            <img src={newData && newData?.urlToImage ? newData?.urlToImage : "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="new" />
            {/* description */}
            <div className={styles.min_card__description}>
                <div className={styles.min_card__description__user}>
                    <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user" />
                    <p>Kinton Woman - <span>Sport</span></p>
                </div>
                <h4>{newData ? newData?.title : 'null'}</h4>
                <span className={styles.min_card__date}>Feb. 20 2023</span>
            </div>
        </div>
    );
}

export default Min_Card;