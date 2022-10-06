const postsReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type){
        case 'get_posts':
            return {...state, posts: action.payload}
        case 'get_one_post':
            const post = state.posts.find((post) => post.id === action.payload )
            return {...state, post}

        default: return state
    }
}

export {postsReducer}