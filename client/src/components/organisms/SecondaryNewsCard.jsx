import styled from 'styled-components';
import { BsBookmark, BsShare } from 'react-icons/bs';
import CardFooter from '../molecules/CardFooter';

function SecondaryNewsCard() {
    return (
        <Card>
            <img src="https://cdn.dribbble.com/userupload/5279196/file/original-e7ac5ca215cbd2df38d4165020026124.png?compress=1&resize=1504x1665&vertical=center" className="img" alt="new" />

            <CardContent>
                <span>Jobs</span>
                <h3>Una noticia inolvidable</h3>
            </CardContent>

        <CardFooter/>
        </Card>
    );
}

const Card = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;

    .img{
        object-fit: cover;
        height: 240px;
    }

    @media (max-width:700px) {
        width: 100%;
        height: 350px;
        padding: 20px 40px;   
    }
`;

let CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0px 5px;
    margin-bottom: 10px;
    span{
        font-size: .9rem;
    }
    h3{
        font-size: 1.2rem;
        margin: 0;
    }
  
`
export default SecondaryNewsCard;