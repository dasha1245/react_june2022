import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {PostService} from "../../services";

const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await PostService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'postSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await PostService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)
const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.post = action.payload
            })
});

const {reducer: postReducer} = postSlice;

const postActions = {
    getAll,
    getById
};

export {
    postReducer,
    postActions
}
