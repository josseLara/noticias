import { styled } from "styled-components";
import Link from "../atoms/Link";

function TobBarLinks({links,onCategoryNewsHandler}) {
    return (
        <Links>
            {
               links.map((link,index)=>{
                    return  <Link {...link} key={index} onCategoryNewsHandler={onCategoryNewsHandler}/> 
               })
            }
        </Links>
    );
}


const Links = styled.ul`
    grid-row: 2/3;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;

    .activeV{
        color: #1E74F6;
        position: relative;
    }
  
    li:hover{
        color: #1E74F6;
        cursor: pointer;
    }
`;

export default TobBarLinks;