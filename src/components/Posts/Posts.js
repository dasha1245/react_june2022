import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, post} = useSelector(state => state.postReducer);

    useEffect(() => {
       dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            <h3>Posts:</h3>
            {post&& <h5>Id of this post is: {post.id}</h5>}
            {posts.map((post) => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts}