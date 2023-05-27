import { LandingContext } from "./LandingContext";

function LandingState({children,states}) {
    return ( 
        <LandingContext.Provider value={{...states}}>
            {children}
        </LandingContext.Provider>
     );
}

export default LandingState;