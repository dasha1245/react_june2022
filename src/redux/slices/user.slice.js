import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {UserService} from "../../services";

const initialState ={
    users: [],
    user: null,
    loading: false,
    error: null,
    userFromAPI: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await UserService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'userSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} =await UserService.getById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.user = action.payload
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.users = action.payload
    //     }
    // }
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
                state.loaging = false
        })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loaging = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loaging = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.userFromAPI = action.payload
            })
})

const {reducer: userReducer, actions: {selectUser}} = userSlice;

const userActions = {
    getAll,
    selectUser,
    getById
};

export {
    userReducer,
    userActions
}