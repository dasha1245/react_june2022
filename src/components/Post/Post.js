import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {

    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <button onClick={() => dispatch(postActions.getById(post.id))}>See more info</button>
                <hr/>
            </div>
        </div>
    );
};

export {Post}