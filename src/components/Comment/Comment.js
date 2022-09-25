import {Link} from "react-router-dom";

const Comment = (props) => {
    const {comment} = props;
    return (
        <div>
            <h3>Name: {comment.name}</h3>
            <h4><i> Email: {comment.email}</i></h4>
            <p> Body: {comment.body}</p>
            <button><Link to={'/posts/' + comment.postId} state={{...comment}}>See more</Link></button>
        </div>
    );
};
export {Comment}