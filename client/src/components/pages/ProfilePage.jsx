import { sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import ProfileTemplate from '../templates/ProfileTemplate';
import activeLinkBar from '../../helpers/activeLinkBar';
import { useSelector } from "react-redux";
import { useMemo } from 'react';



function ProfilePage() {
    let userData = useSelector(state => state.user.userData);
    activeLinkBar('Account', true);

    let inputFileParam = useMemo(() => {
        return [
            { label: "Nombre", inputType: "text", inputValue:  userData?.name ?? "" },
            { label: "Full Name", inputType: "text", inputValue: userData?.lastName ?? "" },
            { label: "Role", inputType: "text",  inputValue: userData?.role ?? "" },
            { label: "Email Address", inputType: "email", inputValue: userData?.email ?? ""},
        ]
    }, [userData]);
 
    return (
        <ProfileTemplate sideBarData={sidebarData} tobBarData={tobbarData} inputFileParam={inputFileParam} userData={userData}/>
    );
}

export default ProfilePage;