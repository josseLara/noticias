import { useSelector } from 'react-redux';
import styles from './slider_news.module.css';
import { BsShare, BsBookmark } from 'react-icons/bs'

function Slider_News() {
    let typeNew = useSelector(state => state.datos.type);
    let news = useSelector(state => state.datos[typeNew]);
    return (
        <div className={styles.slider_news} style={{ backgroundImage: `url(${news ?news?.articles[2]?.urlToImage : null})` }}>
            <div className={styles.slider_news__bg}>
                {/* <div className={styles.slider_news__space}></div> */}
                <span className={styles.slider_news__subtitle}>{news ? news.articles[0]?.content : 'no hay'}</span>
                <h1 className={styles.slider_news__title}>{news ? news.articles[0]?.title : 'no hay'}</h1>
                <div className={styles.line}>
                    <div className={styles.lineBlue}></div>
                </div>
                {/* profile of the publication */}
                <div className={styles.slider_news__profile}>
                    <div className={styles.profile__user}>
                        <img src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user" />
                        <p>Helena Thornot- <span>1 min ago</span></p>
                    </div>
                    <div className={styles.slider_news__profile__icons}>
                        <BsBookmark />
                        <BsShare />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider_News;