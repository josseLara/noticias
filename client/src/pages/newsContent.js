import Layout from '@/components/Layout';
import styles from '../styles/newsContent.module.css';
import { useState } from 'react';
import { BsBookmark, BsBookmarkCheckFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import convertDate from '@/helpers/convertDate';
import { AddToFavorites, RemoveToFavorites } from '@/feactures/favoriteNews/favoriteSlice';
function NewsContent() {
    let [booMarkClick, setBooMarkClick] = useState(false);
    let seletedNew = useSelector(state => state.dataSeletedNew.selectedNew);
    let dispatch = useDispatch();
    
    let handleSaveNew = () => {
        setBooMarkClick(!booMarkClick);
        booMarkClick ? dispatch(RemoveToFavorites(seletedNew)) : dispatch(AddToFavorites(seletedNew))
    }

    return (
        <Layout>

            <div className={styles.newscontent}>
                <div className={styles.newContent_group}>
                    <img src={seletedNew ? seletedNew.urlToImage : "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="img news" className={styles.newscontent__Img} />
                    <span>
                        {booMarkClick
                            ? <BsBookmarkCheckFill onClick={handleSaveNew} />
                            : <BsBookmark onClick={handleSaveNew} />}
                    </span>
                </div>
                <div className={styles.description}>
                    {/* author */}
                    <div className={styles.author}>
                        <img src='https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='author' />
                        <p>
                            {seletedNew ? seletedNew.author : 'author ?'} -
                            <span>  {seletedNew ? convertDate(seletedNew.publishedAt) : '12 min ago ?'}</span>
                        </p>
                    </div>

                    {/* info */}
                    <div className={styles.info}>
                        <h1>{seletedNew ? seletedNew.title : 'Titulo de la noticia'}</h1>
                        <p>{seletedNew && seletedNew.description}</p>
                    </div>

                </div>
                {/* contenido preincipal */}
                <div className={styles.maincontent}>
                    <p className={styles.maincontent__p}>
                        {seletedNew && seletedNew.content}
                    </p>
                    <a href={seletedNew ? seletedNew.url : '/'} className={styles.link_moreInfo}>ver mas</a>
                </div>
            </div>
        </Layout>
    );
}

export default NewsContent;