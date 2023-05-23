import StorageTemplate from '../templates/StorageTemplate';
import {  sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';


function StoragePage() {

    // data components
    

    return (
        <StorageTemplate  sideBarData={sidebarData} tobBarData={tobbarData}/>
    );
}

export default StoragePage;