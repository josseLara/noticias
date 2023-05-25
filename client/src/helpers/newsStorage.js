import { removeStorageNews, saveStorageNews } from "../_actions/news_action";

export let onSaveStorageHandler = (dispatch, news,user) => {
    news.idUser = user.userData.id;
    dispatch(saveStorageNews(news))
}

export let onRemoveStorageHandler = (dispatch, news,user) => {
    news.idUser = user.userData.id;
    dispatch(removeStorageNews(news))
}