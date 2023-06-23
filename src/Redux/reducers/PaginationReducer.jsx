import {  createSlice } from "@reduxjs/toolkit";
 
const paginationReducer = createSlice({
    name:'product',
    initialState:{
        product:[],
        productperpage: 5,
        currentPage: 1
    },
    reducers:{
        fetchPageData:(state,action)=>{
            state.product = [...action.payload];
        },
        onNavigateNext:(state)=>{
            state.currentPage++
          
        },
        onNavigatePrev: (state)=>{
            state.currentPage--
            console.log('nextpage:',state.currentPage)
        }
    }
})
 export default paginationReducer.reducer;
 export const paginationAction = paginationReducer.actions;