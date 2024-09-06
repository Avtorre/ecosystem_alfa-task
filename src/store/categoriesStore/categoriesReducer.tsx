import { createSlice } from "@reduxjs/toolkit"
import { Product, User } from "../../lib/types"


const initialState:string[] = []


const categorySlice = createSlice({
    name:'categories', 
    initialState,
    reducers: {
      setCategories: (state, action: {payload: string[]}) => {
        return state = action.payload
      }, 
    }
})

export const {setCategories} = categorySlice.actions

export default categorySlice.reducer