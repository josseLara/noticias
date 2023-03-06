import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datos:null,
  datosDeportes:null,
  datosSalud:null,
  datosTecnologia:null,
  datosGeneral:null
}

export const datosSlice = createSlice({
  name: 'datos',
  initialState,
  reducers: {
     setDatos: (state,action) => {
      return {...state,datos: action.payload}
    }, 
    setDatosDeportes: (state,action) => {
      return {...state,datosDeportes: action.payload}
    },
    setDatosSalud:(state,action)=>{
      return {...state,datosSalud:action.payload}
    },
    setDatosTecnologia: (state,action) => {
      return {...state,datosTecnologia: action.payload}
    },
    setDatosGeneral:(state,action) =>{
      return {...state,datosGeneral: action.payload}
    }
  },
})


export const { setDatos,setDatosDeportes,setDatosSalud,setDatosTecnologia,setDatosGeneral } = datosSlice.actions

export default datosSlice.reducer;