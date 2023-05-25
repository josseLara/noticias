import StorageTemplate from '../templates/StorageTemplate';
import { sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import activeLinkBar from '../../helpers/activeLinkBar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorageNews } from '../../_actions/news_action';

function StoragePage() {
  // obtener los datos de las noticias guardadas en la db
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const storageData = useSelector((state) => state.news.storageNews);
  const [loading, setLoading] = useState(true);


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
      storageNews={loading ? [] : storageData?.data }
    />
  );
}

export default StoragePage;