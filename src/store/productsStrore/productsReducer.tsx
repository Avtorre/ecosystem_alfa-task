import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../lib/types";

const initialState: Product[] = [];

const checkIndex = (s: Product[]) => {
  let id = 0;
  s.map((p) => {
    if (p.id > id) {
      id = p.id;
    }
  });
  return id + 1;
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: { payload: Product[] }) => {
      return (state = action.payload);
    },
    editProduct: (state, action: { payload: Product }) => {
      return state.map((i) =>
        i.id !== action.payload.id ? i : action.payload
      );
    },
    deleteProduct: (state, action: { payload: Product }) => {
      return state.filter((i) => i.id !== action.payload.id);
    },
    addProduct: (state, action: { payload: Product }) => {
      return (state = [...state, { ...action.payload, id: checkIndex(state) }]);
    },
  },
});

export const { setProducts, editProduct, deleteProduct, addProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
