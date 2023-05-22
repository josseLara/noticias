import SecondaryNewsCard from "../organisms/SecondaryNewsCard";
import MainNewsCard from "../organisms/MainNewsCard";
import SideBar from "../organisms/SideBar";
import TopBar from "../molecules/topbar";
import { styled } from "styled-components";
import Layout from "./Layout";


function LandingPageStructure() {
    return (

        <Layout>

                <MainNewsCard />
                <SecondaryNewsCard />

            <Cards className="cards">
                <SecondaryNewsCard />
                <SecondaryNewsCard />
                <SecondaryNewsCard />
            </Cards>
        </Layout>

    );
}


// 
const Cards = styled.div`  
                display: flex;
                gap: 10px;
                flex-wrap: wrap;

            `;

export default LandingPageStructure;