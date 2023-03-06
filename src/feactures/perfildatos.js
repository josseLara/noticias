import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  likes:null,
  disLikes:null,
  favorites:null
}

export const perfilSlice = createSlice({
  name: 'perfil',
  initialState,
  reducers: {
     setLikes: (state,action) => {
      const currentLikes = state.likes;
      let likes = null;
     if(currentLikes){
      likes = currentLikes.find(e=> e.title == action.payload.title);
     
      if(likes){
        console.log(likes.title)
        return {...state,likes: state.likes.filter(e=> e.title != likes.title)};
      }else{
        const newLikes = [...currentLikes, action.payload]; // Agrega el nuevo like al final del array
        return {...state, likes: newLikes };
      }
     }else{
      const newLikes = currentLikes ? [...currentLikes, action.payload]:  [action.payload]; // Agrega el nuevo like al final del array
      return {...state, likes: newLikes };
     }
     
    },
    setDisLikes: (state,action) => {
      const currentLikes = state.disLikes;
      let disLikes = null;
     if(currentLikes){
      disLikes = currentLikes.find(e=> e.title == action.payload.title);
     
      if(disLikes){
        return {...state,disLikes: state.disLikes.filter(e=> e.title != disLikes.title)};
      }else{
        const newLikes = [...currentLikes, action.payload]; // Agrega el nuevo like al final del array
        return {...state, disLikes: newLikes };
      }
     }else{
      const newLikes = currentLikes ? [...currentLikes, action.payload]:  [action.payload]; // Agrega el nuevo like al final del array
      return {...state, disLikes: newLikes };
     }
     
    },
    setFavorites:(state,action)=>{
      const currentFavorites = state.favorites;
      let favorites = null;
     if(currentFavorites){
      favorites = currentFavorites.find(e=> e.title == action.payload.title);
     
      if(favorites){
        return {...state,favorites: state.favorites.filter(e=> e.title != favorites.title)};
      }else{
        const newLikes = [...currentFavorites, action.payload]; // Agrega el nuevo like al final del array
        return {...state, favorites: newLikes };
      }
     }else{
      const newLikes = currentFavorites ? [...currentFavorites, action.payload]:  [action.payload]; // Agrega el nuevo like al final del array
      return {...state, favorites: newLikes };
     }
    }
  
  },
})


export const { setLikes,setDisLikes,setFavorites} = perfilSlice.actions

export default perfilSlice.reducer;