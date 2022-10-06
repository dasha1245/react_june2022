import {useNavigate} from "react-router";

const Post = ({post}) => {

    const navigate = useNavigate()

    return (
        <div>
            <div>
                <h4>Title: {post.title}</h4>
                <button onClick={() =>  navigate(post.id.toString())}>See more info</button>
                <hr/>
            </div>
        </div>
    );
};

export {Post}