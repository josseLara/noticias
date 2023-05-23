import { useEffect } from "react";
import SideBar from "../organisms/SideBar";
import TopBar from "../organisms/TopBar";
import { styled } from "styled-components";


function Layout({ children, sideBarData,tobBarData }) {

    return (
        <>
            <TopBar {...tobBarData}/>

            <Main>
                <SideBar {...sideBarData}/>
                {children}
            </Main>
        </>
    );
}


// 
const Main = styled.main`
    width: 100%;
    display: flex;
    gap: 10px;
 
 
`;
export default Layout;