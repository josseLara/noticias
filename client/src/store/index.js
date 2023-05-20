import { configureStore } from '@reduxjs/toolkit'
import datosSlice  from '@/feactures/datos/datosSlice'
// import  perfilSlice  from '@/feactures/perfildatos'
import favoriteSlice from '@/feactures/favoriteNews/favoriteSlice'
import selectedNewsSlice from '@/feactures/selectedNews/selectedNewsSlice'

export const store = configureStore({
  reducer: {
     datos:datosSlice,
     dataFavorite:favoriteSlice,
     dataSeletedNew:selectedNewsSlice
    //  perfil:perfilSlice
  },
})