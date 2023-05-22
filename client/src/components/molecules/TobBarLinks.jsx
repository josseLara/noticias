import { styled } from "styled-components";
import Link from "../atoms/Link";

function TobBarLinks({links}) {
    return (
        <Links>
            {
               links.map((link,index)=>{
                    return  <Link {...link}  key={index}/> 
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

    .active{
        color: #1E74F6;
        position: relative;
    }
    .active::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: #1E74F6;
        position: absolute;
        bottom: -10px;
    }
    li:hover{
        color: #1E74F6;
        cursor: pointer;
    }
`;

export default TobBarLinks;