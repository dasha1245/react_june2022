import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {CarsService} from "../../services";

const initialState = {
    cars: [],
    currentCar: null,
    // carForUpdate: null,
    error: null,
    carIdForDelete: null,
}

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.getAll();
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carsSlice/createCar',
    async (car, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.createCar(car)
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const updateCar = createAsyncThunk(
    'carsSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.updateById(id, car)
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
}
)

const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.delete(id)
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        addCurrentCar: (state, action) => {
            state.currentCar = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.currentCar = action.payload
                state.cars.push(state.currentCar)
                state.currentCar = null

            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.carIdForDelete = action.payload
                state.cars.splice(state.carIdForDelete, 1)
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car=> car.id === action.payload.id)
                Object.assign(state.cars[index], action.payload)
                state.currentCar = null
            })


});

const {reducer: carsReducer, actions: {addCurrentCar}} = carsSlice;

const carsActions = {
    getAll,
    createCar,
    deleteCar,
    updateCar,
    addCurrentCar
}

export {
    carsReducer,
    carsActions
}