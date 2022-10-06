const usersReducer = (state = {users: [], user: null}, action) => {
    switch (action.type){
        case 'get_users':
            return {...state, users: action.payload}
        case 'get_one_user':
            const user = state.users.find((user) => user.id === action.payload)
            return {...state, user}


        default: return state

    }
}

export {usersReducer}

