import styles from './sport_math.module.css';
import {BsBookmark} from 'react-icons/bs'

function Sport_Math({border}) {
    return ( 
    <div className={styles.sport_math} style={border ? {borderBottom: '1px solid #222222' }: {}}>
            <BsBookmark/>
            <span>`47</span>
            <img src="https://th.bing.com/th/id/R.2f88ef749eaf3dea78d3a11eb4f74505?rik=%2ba5aH5wLN4Hkzg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fyDsk99z.png&ehk=kK7nOXBIRzXc5rU%2fKBGi3D%2b7YihaO7NsOUwN8YEBY%2f8%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <p>Barcelona</p>
            <p className={styles.sport_math__results}><span>2</span> : <span>1</span></p>
            <p>Real Madrid</p>
            <img src="https://th.bing.com/th/id/R.124393ed40d3e9278fa61d704f7447d8?rik=%2bMT1NM%2fY1cYDJg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f584a9b3bb080d7616d298777.png&ehk=TyL6RyIbqWEF2IiAhCoWWJ0EaL5qdLzTHpeY%2bM8dzDI%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
     );
}

export default Sport_Math;