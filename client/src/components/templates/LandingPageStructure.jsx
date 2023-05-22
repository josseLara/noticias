import SecondaryNewsCard from "../organisms/SecondaryNewsCard";
import MainNewsCard from "../organisms/MainNewsCard";
import SideBar from "../organisms/SideBar";
import TopBar from "../molecules/topbar";
import { styled } from "styled-components";


function LandingPageStructure() {
    return (
        <>
            <TopBar />

            <Main>
                <SideBar />

                <div className="content">
                    <MainNewsCard />
                    <SecondaryNewsCard />

                    <div className="cards">
                        <SecondaryNewsCard />
                        <SecondaryNewsCard />
                        <SecondaryNewsCard />
                    </div>

                </div>
            </Main>
        </>
    );
}


// 
const Main = styled.main`
    display: flex;
    gap: 10px;
    .content{
        margin-top: 20px;
    }
    .content,.cards{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }


`;
export default LandingPageStructure;