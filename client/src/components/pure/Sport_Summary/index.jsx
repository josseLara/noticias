import styles from './sport_summary.module.css';
import {HiOutlineStatusOnline} from 'react-icons/hi';

function Sport_Summary() {
    return  (
        <div className={styles.sport_summary}>
            {/* title */}
            <div className={styles.sport_summary__title}>
                <button><HiOutlineStatusOnline/> live</button>
                <h2>La Liga Santander</h2>
            </div>
            <span className={styles.sport_summary__center}>Week 24</span>
            <div className={styles.sport_summary__clubs}>
                {/* club */}
                <div className={styles.clubs__club}>
                    <img src="https://th.bing.com/th/id/R.2f88ef749eaf3dea78d3a11eb4f74505?rik=%2ba5aH5wLN4Hkzg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fyDsk99z.png&ehk=kK7nOXBIRzXc5rU%2fKBGi3D%2b7YihaO7NsOUwN8YEBY%2f8%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <span>Real Madrid</span>
                </div>
                {/*  */}
                <div className={styles.clubs__description}>
                        <p><span>1</span> : <span>4</span></p>
                        <span className={styles.clubs__description__time}>`80</span>
                </div>
                {/* club */}
                <div className={styles.clubs__club}>
                    <img src="https://th.bing.com/th/id/R.124393ed40d3e9278fa61d704f7447d8?rik=%2bMT1NM%2fY1cYDJg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f584a9b3bb080d7616d298777.png&ehk=TyL6RyIbqWEF2IiAhCoWWJ0EaL5qdLzTHpeY%2bM8dzDI%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <span>Barcelona</span>
                </div>

            </div>
        </div>
     )
}

export default Sport_Summary;