import { createSlice } from "@reduxjs/toolkit"


//задаём тип данных и начальное значение
const initialState = [{}]

//слайс, в котором хранятся результаты поиска и флаг загрузки
const repoSlice = createSlice({
    name:'products', 
    initialState,
    reducers: {
      setProducts: (state, action: {payload: {}[]}) => {
        return state = action.payload
      },
    }
})

export const {setProducts} = repoSlice.actions

export default repoSlice.reducer