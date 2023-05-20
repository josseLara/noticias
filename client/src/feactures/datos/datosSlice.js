import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'datosGeneral',
  language: 'us',
  newsContry: 'us',
  dataSports: null,
  dataBusiness: null,
  dataTechnology: null,
  datosGeneral: null
}

export const datosSlice = createSlice({
  name: 'datos',
  initialState,
  reducers: {
    setType: (state, action) => {
      return { ...state, type: action.payload }
    },
    setDataSports: (state, action) => {
      return { ...state, dataSports: action.payload }
    },
    setDataBusiness: (state, action) => {
      return { ...state, dataBusiness: action.payload }
    },
    setDataTechnology: (state, action) => {
      return { ...state, dataTechnology: action.payload }
    },
    setDatosGeneral: (state, action) => {
      return { ...state, datosGeneral: action.payload }
    },
    setDataNewsContry : (state, action) => {
      return { ...state, newsContry: action.payload }
    },
     setDatosLanguage: (state, action) => {
    return { ...state, language: action.payload }
  },
  // 
  setAddFavoriteProp: (state, action) => {
    return { ...state, ...action.payload }
  },
  
},
})


export const { setType, setDataSports, setDataBusiness, setDataTechnology, setDatosGeneral, setDatosLanguage,setDataNewsContry,setAddFavoriteProp  } = datosSlice.actions

export default datosSlice.reducer;