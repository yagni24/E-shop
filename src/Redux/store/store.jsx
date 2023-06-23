import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import paginationReducer from "../reducers/PaginationReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    pagination: paginationReducer,
  },
})