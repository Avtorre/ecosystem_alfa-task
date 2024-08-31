import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsStrore/productsReducer";


//стандартный шаблон инициализации redux'a 
export const store = configureStore({
    reducer: {
      products: productsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch