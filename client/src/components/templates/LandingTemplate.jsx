import SecondaryNewsCard from "../organisms/SecondaryNewsCard";
import MainNewsCard from "../organisms/MainNewsCard";
import SideBar from "../organisms/SideBar";
import TopBar from "../organisms/TopBar";
import { styled } from "styled-components";
import Layout from "./Layout";
import { useContext } from "react";
import { LandingContext } from "../../context/Landing/LandingContext";

function LandingTemplate() {
    const {sidebarData, tobbarData, newsData} = useContext(LandingContext)
 
    return (

        <Layout sideBarData={sidebarData} tobBarData={tobbarData}>
            <Content>

            {newsData.allNews && <MainNewsCard {...newsData.allNews.articles[0]} />}
            {newsData.allNews && <SecondaryNewsCard {...newsData.allNews.articles[1]} />}

                <Cards className="cards">
                   {newsData.allNews &&
                    newsData.allNews.articles.slice(2) .map((news,index)=> <SecondaryNewsCard  {...news}  key={index}/>)}
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