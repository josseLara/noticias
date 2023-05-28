import { LandingContext } from "./LandingContext";

// Define a new component called LandingState
function LandingState({children,states}) {
    // Render the LandingContext.Provider component with the states object as its value
    return ( 
        <LandingContext.Provider value={{...states}}>
            {children}
        </LandingContext.Provider>
     );
}
export default LandingState;