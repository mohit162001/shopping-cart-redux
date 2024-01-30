import { createSlice } from "@reduxjs/toolkit"

const cartInitialState = {
    items:[],
    totalQuantity:0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState:cartInitialState,
    reducers:{
        
        addItemToCart(state,action){
            
            const newItem = action.payload;
            const existingItem = state.items.find(item=>item.id===newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                });
            }else{
                existingItem.quantity = existingItem.quantity+1
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }

        },
        removeItem(state,action){
            
            const id = action.payload;
            const existingItem = state.items.find(item=>item.id===id);
            state.totalQuantity--;
 
            if(existingItem.quantity ===1){
                state.items = state.items.filter(items=>items.id !==id);
            }else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },
        replaceCart(state,action){
            // state.totalQuantity = action.payload.totalQuantity ;
            // state.items = action.payload.items || [];
            const { totalQuantity, items } = action.payload || {};
            state.totalQuantity = totalQuantity || 0;
            state.items = items || [];
        },
    }

})

export const cartAction = cartSlice.actions