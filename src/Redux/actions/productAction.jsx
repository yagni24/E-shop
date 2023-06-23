import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import paginationReducer from '../reducers/PaginationReducer';
export const increment = createAction('INCREMENT', (value)=>({
        payload:{value}
}));

export const decrement = createAction('DECREMENT', (noOfItem)=>({
    payload:{noOfItem}
}))

export const fetchData = createAsyncThunk('product/fetchData', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_${page}&_limit=5');
        const data = response.data;
        return data;
    }
    catch (error){
        console.error('Error:',error);
        throw error;
    }
})


