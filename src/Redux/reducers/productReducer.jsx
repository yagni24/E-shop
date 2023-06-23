import {  createSlice } from '@reduxjs/toolkit';
import {  fetchData } from '../actions/productAction';

const productReducer = createSlice({
  name:'product',
  initialState:{
    data:[],
    loading:false,
    error:null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchData.pending, (state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchData.fulfilled,(state,action)=> {
      console.log('action', action)
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchData.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.error.message;
    })
  }
})
export default productReducer.reducer;
