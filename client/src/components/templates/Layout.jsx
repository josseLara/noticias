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
                <div className="content">
                    {children}
                </div>
            </Main>
        </>
    );
}


// 
const Main = styled.main`
    width: 100%;
    display: flex;
    gap: 10px;
 
    .content{
        width: 100%;
        height: 89vh;
       display: flex;
       flex-wrap: wrap;
       gap: 20px;
       overflow-y:scroll;
       margin-top: 20px;
        @media (max-width:700px) {
          height: 79vh;
        }
    }
`;
export default Layout;