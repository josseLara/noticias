import StorageTemplate from '../templates/StorageTemplate';
import { sidebarData } from '../../data/sideBarData'; 
import { tobbarData } from '../../data/tobbarData'; 
import activeLinkBar from '../../helpers/activeLinkBar';
import { Suspense, useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { getStorageNews } from '../../_actions/news_action'; 

function StoragePage() {
  const dispatch = useDispatch(); // Get the dispatch function from the useDispatch hook
  const user = useSelector((state) => state.user.userData); // Select the user data from the store
  const [loading, setLoading] = useState(true); // Create a loading state with the useState hook
  const storageNews = useSelector((state) => state.news.storageNews?.data); // Select the storageNews data from the store

  useEffect(() => {
    if(user){  
      dispatch(getStorageNews(user)).then((response) => { // Dispatch the getStorageNews action with the user data and handle the response
        if (response.payload.success) {
          setLoading(false) // Set the loading state to false if the response is successful
        } else {
          alert('Error getting saved news'); // Show an alert if there's an error getting the saved news
        }
      });
    }
  }, [user]);

  activeLinkBar('Store', true); // Call the activeLinkBar helper function to highlight the "Store" link in the sidebar

  return (
    <StorageTemplate // Render the StorageTemplate component with the sidebar data, topbar data, and storageNews data
      sideBarData={sidebarData}
      tobBarData={tobbarData}
      storageData={loading ?  []: storageNews }
      />
  );
}

export default StoragePage; // Export the StoragePage component