import styled from 'styled-components';
import { BsBookmark, BsShare, BsBookmarkStarFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onRemoveStorageHandler, onSaveStorageHandler } from '../../helpers/newsStorage';
import ContextMenu from './ContextMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardFooter({ title, urlToImage, url, publishedAt, author }) {
  let [bookmarkSeleted, setBookmarkSeleted] = useState(false);
  let [clickShare, setClickShare] = useState(false);
  const user = useSelector((state) => state.user);
  const storageData = useSelector((state) => state.news.storageNews);
  const newsUpdate = useSelector((state) => state.news.allNews);
  const dispatch = useDispatch();

  // Bookmark handler
  let bookmarkHandler = () => {
    setBookmarkSeleted(!bookmarkSeleted)
    if (!bookmarkSeleted) {
      onSaveStorageHandler(dispatch, { title, urlToImage, url, publishedAt, author }, user)
    } else {
      onRemoveStorageHandler(dispatch, { title, urlToImage, url, publishedAt, author }, user)
    }
  }

  // Check if the news is already bookmarked
  useEffect(() => {
    if (storageData?.data) {
      setBookmarkSeleted(storageData.data.some((news) => news.url == url))
    }
  }, [newsUpdate, storageData])

  // Share handler
  let onCopyLinkHandler = ()=> {
    navigator.clipboard.writeText(url ?? "")
    setClickShare(false)
    toast('🔗Copied Link 👌')
  }

  return (
    <CardInfo>
      <CardUserDetails>
        <img src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>{author}</span>
      </CardUserDetails>

      <div className="btns">
        {bookmarkSeleted ? <BsBookmarkStarFill onClick={bookmarkHandler} /> : <BsBookmark onClick={bookmarkHandler} />}
        <BsShare onClick={() => setClickShare(!clickShare)} />
        <ContextMenu toggle={clickShare} onCopyLinkHandler={onCopyLinkHandler} />
        <ToastContainer/>
      </div>
    </CardInfo>
  );
}

// styles 
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;

  .btns {
    display: flex;
    gap: 10px;
    font-size: 1.3rem;
    z-index: 4;
    position: relative;

    svg {
      z-index: 1000;
      cursor: pointer;
      &:hover {
        color: #1e74f6;
      }
    }
  }
`;

const CardUserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  * {
    z-index: 4;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
  }
  span {
    font-size: 1rem;
  }
`;

export default CardFooter;