import styled from 'styled-components';
import { BsBookmark, BsShare, BsBookmarkStarFill } from 'react-icons/bs';
import { useState } from 'react';

function CardFooter({ title,urlToImage,url,publishedAt,author,onSaveStorageHandler }) {
  let [bookmarkSeleted, setBookmarkSeleted] = useState(false);

  let bookmarkHandler = () => {
    setBookmarkSeleted(!bookmarkSeleted)
    onSaveStorageHandler({title,urlToImage,url,publishedAt,author})
  }
  return (

    <CardInfo>

      <CardUserDetails>
        <img src="https://cdn.dribbble.com/userupload/5279195/file/original-5d3fba6e970888c73e4c8a34a6df91ad.png?compress=1&resize=1504x1128" alt="" />
        <span>{author}</span>
      </CardUserDetails>

      <div className="btns">
        {bookmarkSeleted ? <BsBookmarkStarFill onClick={bookmarkHandler} /> : <BsBookmark onClick={bookmarkHandler} /> }
        <BsShare />
      </div>
    </CardInfo>

  );
}

// styles 

const CardInfo = styled.div`
   display: flex;
   justify-content: space-between;

   .btns{
    display: flex;
    gap: 10px;
        font-size: 1.3rem;
        z-index: 4;
   }
`;

const CardUserDetails = styled.div`
  display:flex;
  align-items:center;
    gap: 10px;
    *{
    z-index: 4;
    }
  img{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    
  }
  span{
    font-size: 1rem;
  }
  
`;

export default CardFooter;