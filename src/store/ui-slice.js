import { createSlice } from "@reduxjs/toolkit"

const initalCartState = {
    cartVisible: false,
    notification:null
}

export const uiSlice = createSlice({
    name:'ui',
    initialState:initalCartState,
    reducers:{
        showCart(state){
            state.cartVisible = !state.cartVisible
        },
        showNotification(state,action){
            state.notification = {
                status:action.payload.status,
                title:action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiAction  = uiSlice.actions;