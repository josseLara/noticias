import SecondaryNewsCard from "../organisms/SecondaryNewsCard";
import MainNewsCard from "../organisms/MainNewsCard";
import SideBar from "../organisms/SideBar";
import TopBar from "../molecules/topbar";
import { styled } from "styled-components";


function Layout({children}) {
    return (
        <>
            <TopBar />

            <Main>
                <SideBar />     
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