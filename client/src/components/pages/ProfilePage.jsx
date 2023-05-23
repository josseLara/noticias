import { useCallback, useEffect } from 'react';
import {  sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import ProfileTemplate from '../templates/ProfileTemplate';
import activeLinkSidebar from '../../helpers/activelinkSidebar';


function ProfilePage() {

   activeLinkSidebar('Account')

    return (
        <ProfileTemplate  sideBarData={sidebarData} tobBarData={tobbarData}/>
    );
}

export default ProfilePage;