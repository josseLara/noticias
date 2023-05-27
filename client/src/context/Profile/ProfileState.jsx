import { ProfileContext } from "./ProfileContext";

function ProfileState({children,states}) {
    return ( 
        <ProfileContext.Provider value={{...states}}>
            {children}
        </ProfileContext.Provider>
     );
}

export default ProfileState;