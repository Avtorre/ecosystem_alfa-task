import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsStrore/productsReducer";
import userReducer from "./userStore/userReducer";


//стандартный шаблон инициализации redux'a 
export const store = configureStore({
    reducer: {
      products: productsReducer,
      user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch