import SecondaryNewsCard from "../organisms/SecondaryNewsCard";
import MainNewsCard from "../organisms/MainNewsCard";
import SideBar from "../organisms/SideBar";
import TopBar from "../organisms/TopBar";
import { styled } from "styled-components";
import Layout from "./Layout";

function LandingTemplate({sideBarData,tobBarData,newsData,onCategoryNewsHandler }) {
    return (

        <Layout sideBarData={sideBarData} tobBarData={tobBarData} onCategoryNewsHandler={onCategoryNewsHandler}>
            <Content>

            {newsData && newsData.length > 0 && <MainNewsCard {...newsData[0]} />}
            {newsData && newsData.length > 1 && <SecondaryNewsCard {...newsData[1]} />}

                <Cards className="cards">
                   {newsData &&
                    newsData.slice(2) .map((news,index)=> <SecondaryNewsCard  {...news} key={index}/>)}
                </Cards>

            </Content>
        </Layout>

    );
}


// 
const Content = styled.div`
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
`
const Cards = styled.div`  
                display: flex;
                gap: 10px;
                flex-wrap: wrap;

            `;

export default LandingTemplate;