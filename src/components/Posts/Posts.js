import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {postsService} from "../../services";

const Posts = () => {

    const location = useLocation()
    const {state: post} = location;
    console.log(post);

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        postsService.getById(post.id).then(value => setPosts(value.data))
    },[post.id])

    return (
        <div>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
        </div>
    );
};

export {Posts}