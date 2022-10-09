import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carsReducer} from "./slices";

const root = combineReducers({
    carsReducer
})
const setupStore = () => configureStore({
    reducer: root
});

export {
    setupStore
}