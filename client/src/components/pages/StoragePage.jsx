import StorageTemplate from '../templates/StorageTemplate';
import { sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import activeLinkBar from '../../helpers/activeLinkBar';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorageNews } from '../../_actions/news_action';

function StoragePage() {
  // obtener los datos de las noticias guardadas en la db
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const [loading, setLoading] = useState(true);
    const storageNews = useSelector((state) => state.news.storageNews?.data);

  useEffect(() => {
    if(user){  
      dispatch(getStorageNews(user)).then((response) => {
        if (response.payload.success) {
          setLoading(false)
        } else {
          alert('Error getting saved news');
        }
      });
    }
  }, [user]);

  // data components
  activeLinkBar('Store', true);

  return (
  
    <StorageTemplate
      sideBarData={sidebarData}
      tobBarData={tobbarData}
      storageData={loading ?  []: storageNews }
      />

  );
}

export default StoragePage;