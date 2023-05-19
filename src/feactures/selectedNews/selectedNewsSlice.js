import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedNew: "",
}

export const selectedNewsSlice = createSlice({
    name: 'selectedNew',
    initialState,
    reducers: {
        AddToSelectedNew: (state, action) => {
            state.selectedNew = action.payload;
        },
    },
})


export const { AddToSelectedNew } = selectedNewsSlice.actions

export default selectedNewsSlice.reducer;