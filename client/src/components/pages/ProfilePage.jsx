import {  sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import ProfileTemplate from '../templates/ProfileTemplate';
import activeLinkBar from '../../helpers/activeLinkBar';


function ProfilePage() {

    activeLinkBar('Account',true);

    return (
        <ProfileTemplate  sideBarData={sidebarData} tobBarData={tobbarData}/>
    );
}

export default ProfilePage;