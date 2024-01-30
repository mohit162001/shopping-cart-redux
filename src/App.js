import { useSelector,useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiAction } from "./store/ui-slice";
import Notification from "./components/Notification/Notification";
import { fetchCartData } from "./store/cart-action";

function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector((state) => {
    return state.ui.cartVisible;
  });
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state=>state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  
  useEffect(() => {
    async function sendCartData(){
      dispatch(uiAction.showNotification({
        status:'pending',
        title:'Sending...',
        message:'sending your data'
      }))

        const response = await fetch("https://redux-shopping-cart-7fa76-default-rtdb.firebaseio.com/cart.json", 
      {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      const resData = await response.json();
      console.log(resData)
      if(!response.ok){
        throw new Error('something went wrong')
      }
   
      dispatch(uiAction.showNotification({
        status:'success',
        title:'Completed!',
        message:'Data sent successfully'
      }))
    }
    
    sendCartData().catch(()=>{
      dispatch(uiAction.showNotification({
        status:'error',
        title:'Failed',
        message:'Data sending failed !'
      }))
    })
  }, [cart,dispatch]);
  return (
    <>
    {notification?<Notification status={notification.status} title={notification.title} message={notification.message}/>:''}
    <Layout>
      {cartVisible ? <Cart /> : ""}
      <Products />
    </Layout>
    </>
  );
}

export default App;
