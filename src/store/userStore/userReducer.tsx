import { createSlice } from "@reduxjs/toolkit"
import { Product, User } from "../../lib/types"



const initialState:User = {
    favourite: []
}


const userSlice = createSlice({
    name:'user', 
    initialState,
    reducers: {
      addFavourite: (state, action: {payload: number}) => {
        return state = {...state, favourite: [...state.favourite, action.payload]}
      }, 
      removeFavourite: (state, action: {payload: number}) => {
        return state = {...state, favourite: state.favourite.filter((i) => i !== action.payload)}
      }, 
    }
})

export const {addFavourite, removeFavourite} = userSlice.actions

export default userSlice.reducer