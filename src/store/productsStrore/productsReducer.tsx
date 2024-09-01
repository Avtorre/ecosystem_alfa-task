import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../lib/types"


//задаём тип данных и начальное значение
const initialState:Product[] = []

//слайс, в котором хранятся результаты поиска и флаг загрузки
const repoSlice = createSlice({
    name:'products', 
    initialState,
    reducers: {
      setProducts: (state, action: {payload: Product[]}) => {
        return state = action.payload
      },
      editProduct: (state, action: {payload: Product}) => {
        return state.map((i) => i.id !== action.payload.id ? i : action.payload)  
      },
      deleteProduct: (state, action: {payload: Product}) => {
        return state.filter((i) => i.id !== action.payload.id)  
      }
    }
})

export const {setProducts, editProduct, deleteProduct} = repoSlice.actions

export default repoSlice.reducer