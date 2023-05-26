import { styled } from "styled-components";
import Layout from "./Layout";
import Title from "../atoms/Title";
import SecondaryNewsCard from "../organisms/SecondaryNewsCard";

function SearchTemplate( {sideBarData, tobBarData,searchNews } ) {

    return (

        <Layout sideBarData={sideBarData} tobBarData={tobBarData} searchNews={searchNews}>
            <Content>

                <Title>Search</Title>
                <Cards className="cards">
                    {
                     searchNews &&  searchNews.map((news,index)=>{
                            return <SecondaryNewsCard {...news} key={index} />
                        })
                    }
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

export default SearchTemplate;