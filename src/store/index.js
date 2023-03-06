import { configureStore } from '@reduxjs/toolkit'
import datosSlice  from '@/feactures/datos/datosSlice'
import  perfilSlice  from '@/feactures/perfildatos'

export const store = configureStore({
  reducer: {
     datos:datosSlice,
     perfil:perfilSlice
  },
})