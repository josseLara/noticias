import styled from 'styled-components';
import { BsBookmark, BsShare } from 'react-icons/bs';
import CardFooter from '../molecules/CardFooter';

function MainNewsCard({ title, urlToImage = "", url, publishedAt, source, author }) {

  return (
    <Card image={urlToImage}>
      <span>{source?.name}</span>
      <h1>{title ?? null}</h1>

      <CardFooter author/>
    </Card>
  );
}

// styles 
const Card = styled.div`
height: 350px;
width: 550px;
background-position: center;
background-size: contain;
backdrop-filter: brightness(90px);
display: flex;
flex-direction: column;
justify-content: end;
position: relative;
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
padding:10px;
padding-right: 20px;
margin-right: 5%;

div::before {
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.334);
  z-index: 1;
}
  h1{
    font-size: 1.6rem;
    z-index: 4;

  }
  
  @media (max-width:700px) {
        width: 100%;
        margin: 0;
    }

`;


export default MainNewsCard;