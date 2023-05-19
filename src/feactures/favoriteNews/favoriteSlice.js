import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorite: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    AddToFavorites: (state, action) => {
      state.favorite.push(action.payload);
    },
    RemoveToFavorites: (state, action) => {
      let newTitles = state.favorite.map(newTitle => newTitle.title);
      let newindex = newTitles.indexOf(action.payload.title)
      if (newindex >= 0) state.favorite.splice(newindex, 1);
    }

  },
})


export const { AddToFavorites, RemoveToFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer;