import {combineReducers} from "redux";

import {usersReducer, postsReducer} from '../reducers'

const reducer = combineReducers({
    usersReducer,
    postsReducer
})

export {reducer}