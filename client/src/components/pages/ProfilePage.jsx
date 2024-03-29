import { sidebarData } from '../../data/sideBarData';
import { tobbarData } from '../../data/tobbarData';
import ProfileTemplate from '../templates/ProfileTemplate';
import activeLinkBar from '../../helpers/activeLinkBar';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from 'react';
import { updatePhotoUser, updateUser } from '../../_actions/user_action';
import ProfileState from '../../context/Profile/ProfileState';



function ProfilePage() {
    const dispatch = useDispatch();
    let userData = useSelector(state => state.user.userData);

    // Define state variables for form inputs
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [toggleFormPhoto, setToggleFormPhoto] = useState(false);

    // Define event handlers for form inputs
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };
    const onLastNameHandler = (event) => {
        setLastName(event.currentTarget.value);
    };
    const onRoleHandler = (event) => {
        setRole(event.currentTarget.value);
    };
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };
    const onPhotoHandler = (event) => {
        setPhoto(event.currentTarget.value);
    };
    const onToggleFormPhotoHandler = () => {
        setToggleFormPhoto(!toggleFormPhoto);
    };

    // Define form input parameters using useMemo to avoid unnecessary re-renders
    let inputFileParam = useMemo(() => {
        return [
            { label: "Nombre", inputType: "text", onChange: onNameHandler, inputValue: userData?.name ?? "" },
            { label: "Full Name", inputType: "text", onChange: onLastNameHandler, inputValue: userData?.lastName ?? "" },
            { label: "Role", inputType: "text", onChange: onRoleHandler, inputValue: userData?.role ?? "" },
            { label: "Email Address", inputType: "email", onChange: onEmailHandler, inputValue: userData?.email ?? "" },
        ]
    }, [userData]);

    // Set active link bar
    activeLinkBar('Account', true);

    // Define handler for updating user data
    const onUpdateUserHandler = () => {
        dispatch(updateUser({ name, lastName, role, email, id: userData.id })).then((response) => {
            if (response.payload.success) {
                // TODO: Handle success
            } else {
                alert('Failed to sign up');
            }
        });
    };

    // Set form input values on mount and when userData changes
    useEffect(() => {
        setName(userData?.name)
        setLastName(userData?.lastName)
        setRole(userData?.role)
        setEmail(userData?.email)
    }, [userData])

    // Define handler for submitting photo update form
    const onSubmitPhoto = (event) => {
        event.preventDefault();
        dispatch(updatePhotoUser({ photo, id: userData.id })).then((response) => {
            if (response.payload.success) {
                onToggleFormPhotoHandler();
            } else {
                alert('Failed to sign up');
            }
        });
    }


    return (
        <ProfileState states={
            {
                sidebarData,
                tobbarData,
                inputFileParam,
                userData,
                onUpdateUserHandler,
                // Photo
                onPhotoHandler,
                onSubmitPhoto,
                onToggleFormPhotoHandler,
                toggleFormPhoto
            }
        }>
            <ProfileTemplate />
        </ProfileState>
    );
}

export default ProfilePage;

