import { configureStore, current } from "@reduxjs/toolkit";
import productsReducer from "./productsStrore/productsReducer";
import userReducer from "./userStore/userReducer";
import currentReducer from "./currentStore/currentReducer";
import categoriesReducer from "./categoriesStore/categoriesReducer";


//стандартный шаблон инициализации redux'a 
export const store = configureStore({
    reducer: {
      products: productsReducer,
      user: userReducer,
      current: currentReducer,
      categories: categoriesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch