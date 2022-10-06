import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {

    let {posts} = useSelector(state => state.postsReducer);
    let dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: 'get_posts', payload: data}))
    }, [])

    return (
        <div>
            {posts.map((post) => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts}