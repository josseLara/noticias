import styled from 'styled-components';
import { BsBookmark, BsShare } from 'react-icons/bs';
import CardFooter from '../molecules/CardFooter';

function MainNewsCard() {

  return (
    <Card>
      <span>Travel</span>
      <h1>30 años de gloria para el superior</h1>

      <CardFooter />
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
background-image: url(https://cdn.dribbble.com/userupload/5279196/file/original-e7ac5ca215cbd2df38d4165020026124.png?compress=1&resize=1504x1665&vertical=center);
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
  

`;


export default MainNewsCard;