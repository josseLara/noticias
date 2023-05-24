import StorageTemplate from '../templates/StorageTemplate';
import {  sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import activeLinkBar from '../../helpers/activeLinkBar';


function StoragePage() {

    // data components
   activeLinkBar('Store',true);    

    return (
        <StorageTemplate  sideBarData={sidebarData} tobBarData={tobbarData}/>
    );
}

export default StoragePage;