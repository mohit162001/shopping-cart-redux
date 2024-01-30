import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { uiSlice } from "./ui-slice";
import { cartSlice } from "./cart-slice";

const rootReducers = combineReducers({
  ui: uiSlice.reducer,
  cart: cartSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
