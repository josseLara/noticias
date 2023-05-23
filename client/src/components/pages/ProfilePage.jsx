import {  sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import ProfileTemplate from '../templates/ProfileTemplate';


function ProfilePage() {

    // data components
    

    return (
        <ProfileTemplate  sideBarData={sidebarData} tobBarData={tobbarData}/>
    );
}

export default ProfilePage;