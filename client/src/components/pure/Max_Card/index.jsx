import { useEffect, useState } from 'react';
import styles from './max_card.module.css';
import { BsBookmark, BsShare, BsBookmarkCheckFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { AddToFavorites, RemoveToFavorites } from '@/feactures/favoriteNews/favoriteSlice';
import { setAddFavoriteProp } from '@/feactures/datos/datosSlice';
import { AddToSelectedNew } from '@/feactures/selectedNews/selectedNewsSlice';
import { useRouter } from 'next/router';

function Max_Card({ newData, number, type, sectionStorage, newsFavoritesProp }) {
    let dispatch = useDispatch();
    let [booMarkClick, setBooMarkClick] = useState(false);
    let newsFavorite = useSelector(state => state.dataFavorite.favorite);
    let router = useRouter()

    useEffect(() => {
        if (newData) {
            setBooMarkClick(newsFavorite.some(newSaveItem => newData.title == newSaveItem.title) ?? [])
        }
    }, [newData])


    let handleSaveNew = () => {
        setBooMarkClick(!booMarkClick);
        booMarkClick ? dispatch(RemoveToFavorites(newData)) : dispatch(AddToFavorites(newData))
    }

    const handleMoreInfo = ()=>{
        dispatch(AddToSelectedNew(newData));
        router.push('/newsContent')
    }
    return (
        <>
            {
                !sectionStorage ?

                    <div className={styles.max_card} onClick={()=>  handleMoreInfo()}>
                        <img src={newData && newData?.urlToImage ? newData?.urlToImage : "https://images.pexels.com/photos/1586034/pexels-photo-1586034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="new" />

                        <span className={styles.max_card__tag}>Politics</span>

                        <p className={styles.max_card__title}>{newData ? newData?.title : "U.S Risks Roiling Oil Markets"}</p>
                        {/* profile */}
                        <div className={styles.slider_news__profile}>
                            {/* bottom profile */}
                            <div className={styles.max_card__profile}>
                                <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user" />
                                <p>Billie Benson - <span>5 min ago</span></p>
                            </div>
                            {/*  bottom icons */}
                            <div className={styles.max_card__profile__icons}>
                                {booMarkClick
                                    ? <BsBookmarkCheckFill onClick={handleSaveNew} />
                                    : <BsBookmark onClick={handleSaveNew} />}
                                <BsShare />
                            </div>
                        </div>
                    </div>

                    :

                    <div className={styles.max_card} onClick={()=>  handleMoreInfo()}>
                        <img src={newsFavoritesProp ? newsFavoritesProp.urlToImage : "https://images.pexels.com/photos/1586034/pexels-photo-1586034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="new" />

                        <span className={styles.max_card__tag}>Politics</span>

                        <p className={styles.max_card__title}>{newsFavorite ? newsFavoritesProp.title : null}</p>
                        {/* profile */}
                        <div className={styles.slider_news__profile}>
                            {/* bottom profile */}
                            <div className={styles.max_card__profile}>
                                <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user" />
                                <p>Billie Benson - <span>5 min ago</span></p>
                            </div>
                            {/*  bottom icons */}
                            <div className={styles.max_card__profile__icons}>
                                {!booMarkClick
                                    ? <BsBookmarkCheckFill onClick={() => setBooMarkClick(!booMarkClick)} />
                                    : <BsBookmark onClick={() => setBooMarkClick(!booMarkClick)} />}
                                <BsShare />
                            </div>
                        </div>
                    </div>

            }
        </>
    );
}

export default Max_Card;