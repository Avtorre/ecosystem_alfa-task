import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../lib/types"


const initialState:Product = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0
  }
}

const currentSlice = createSlice({
    name:'current', 
    initialState,
    reducers: {
      setCurrent: (state, action: {payload: Product}) => {
        return state = action.payload
      },
      resetCurrent : (state) => {
        return state = initialState
      }
    }
})

export const {setCurrent, resetCurrent} = currentSlice.actions

export default currentSlice.reducer