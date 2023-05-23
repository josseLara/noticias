import SecondaryNewsCard from "../organisms/SecondaryNewsCard";
import MainNewsCard from "../organisms/MainNewsCard";
import SideBar from "../organisms/SideBar";
import TopBar from "../molecules/topbar";
import { styled } from "styled-components";
import Layout from "./Layout";
import Title from "../atoms/Title";


function StoragePageTemplate() {
    return (

        <Layout>
            <Content>

                <Title>Storage</Title>
                <Cards className="cards">
                    <SecondaryNewsCard />
                    <SecondaryNewsCard />
                    <SecondaryNewsCard />
                    <SecondaryNewsCard />
                    <SecondaryNewsCard />
                    <SecondaryNewsCard />
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
        flex-direction: column;
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

export default StoragePageTemplate;