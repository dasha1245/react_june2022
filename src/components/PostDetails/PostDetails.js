import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect} from "react";

import {OnePost} from "./OnePost";

const PostDetails = () => {

    let {post} = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    let {postId} = useParams()

    useEffect(() => {
        dispatch({type: 'get_one_post', payload: Number(postId)})
    }, [postId])
    return (
        <div>
            {post && <OnePost post={post}/>}
        </div>
    );
};

export {PostDetails}