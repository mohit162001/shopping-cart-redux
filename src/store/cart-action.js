import { uiAction } from "./ui-slice";

import { cartAction } from "./cart-slice";


export const fetchCartData = ()=>{
    return async (dispatch)=>{
        async function fetchData(){
            const response = await fetch('https://redux-shopping-cart-7fa76-default-rtdb.firebaseio.com/cart.json')
            if(!response.ok){
                throw new Error('Could not fetch data');
            }
            const data = await response.json()

            return data;
        }

        try{
           const cartData = await fetchData();
           dispatch(cartAction.replaceCart({
            items:cartData.items ||[],
            totalQuantity:cartData.totalQuantity
           }));
        }catch(error){
            dispatch(uiAction.showNotification({
                status:'error',
                title:'Failed',
                message:'Fetching failed !'
              }))
        }
    }
}