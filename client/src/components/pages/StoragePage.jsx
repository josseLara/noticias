import StorageTemplate from '../templates/StorageTemplate';
import {  sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import activeLinkSidebar from '../../helpers/activelinkSidebar';


function StoragePage() {

    // data components
   activeLinkSidebar('Store')
    

    return (
        <StorageTemplate  sideBarData={sidebarData} tobBarData={tobbarData}/>
    );
}

export default StoragePage;