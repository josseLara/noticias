import styled from 'styled-components';
import CardFooter from '../molecules/CardFooter';
import { Suspense } from 'react';

function SecondaryNewsCard({ title, urlToImage, url, publishedAt, source, author }) {
    const onLinkGHandler = ()=> location.href = url;
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Card>
                <img src={urlToImage} className="img" alt="new" />

                <CardContent>
                    <span>{source?.name}</span>
                    <h3 onClick={onLinkGHandler}>{title}</h3>
                </CardContent>

                <CardFooter
                    author={author ?? ""} title={title} urlToImage={urlToImage} url={url} publishedAt={publishedAt} />
            </Card>
        </Suspense>
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

        &:hover{
            cursor: pointer;
            text-decoration: underline;
            color: #1e74f6;
        }
    }
  
`
export default SecondaryNewsCard;