import styled from 'styled-components';
import { BsBookmark, BsShare } from 'react-icons/bs';
import CardFooter from '../molecules/CardFooter';

function SecondaryNewsCard({title,urlToImage,url,publishedAt,source,author,onSaveStorageHandler}) {
    return (
        <Card>
            <img src={urlToImage} className="img" alt="new" />

            <CardContent>
                <span>{source?.name}</span>
                <h3>{title}</h3>
            </CardContent>

        <CardFooter 
        author={author} title={title} urlToImage={urlToImage} url={url} publishedAt={publishedAt} 
        onSaveStorageHandler={onSaveStorageHandler}/>
        </Card>
    );
}

const Card = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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