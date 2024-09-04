import { createSlice } from "@reduxjs/toolkit"
import { Product, User } from "../../lib/types"



const initialState:User = {
    favourite: []
}


const repoSlice = createSlice({
    name:'user', 
    initialState,
    reducers: {
      addFavourite: (state, action: {payload: number}) => {
        return state = {...state, favourite: [...state.favourite, action.payload]}
      }
    }
})

export const {addFavourite} = repoSlice.actions

export default repoSlice.reducer