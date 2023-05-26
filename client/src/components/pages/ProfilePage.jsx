import { sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import ProfileTemplate from '../templates/ProfileTemplate';
import activeLinkBar from '../../helpers/activeLinkBar';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from 'react';
import { updateUser } from '../../_actions/user_action';



function ProfilePage() {
    const dispatch = useDispatch();
    let userData = useSelector(state => state.user.userData);
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };
    const onFullNameHandler = (event) => {
        setFullName(event.currentTarget.value);
    };
    const onRoleHandler = (event) => {
        setRole(event.currentTarget.value);
    };
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    let inputFileParam = useMemo(() => {
        return [
            { label: "Nombre", inputType: "text", onChange: onNameHandler, inputValue: userData?.name ?? "" },
            { label: "Full Name", inputType: "text", onChange: onFullNameHandler, inputValue: userData?.lastName ?? "" },
            { label: "Role", inputType: "text", onChange: onRoleHandler, inputValue: userData?.role ?? "" },
            { label: "Email Address", inputType: "email", onChange: onEmailHandler, inputValue: userData?.email ?? "" },
        ]
    }, [userData]);

    activeLinkBar('Account', true);

    const onUpdateUserHandler = () => {
        dispatch(updateUser({name,fullName,role,email,id:userData.id})).then((response) => {
            if (response.payload.success) {

            } else {
                alert('Failed to sign up');
            }
        });
    };

    useEffect(()=>{
        console.log(userData)
        setName(userData.name)
        setFullName(userData.lastName)
        setRole(userData.role)
        setEmail(userData.email)
    } ,[userData])

    return (
        <ProfileTemplate sideBarData={sidebarData} tobBarData={tobbarData}
            inputFileParam={inputFileParam} userData={userData} onUpdateUserHandler={onUpdateUserHandler} />
    );
}

export default ProfilePage;