import { ProfileContext } from "./ProfileContext";

// Define a new component called LandingState
function ProfileState({children,states}) {
    // Render the LandingContext.Provider component with the states object as its value
    return ( 
        <ProfileContext.Provider value={{...states}}>
            {children}
        </ProfileContext.Provider>
     );
}

export default ProfileState;