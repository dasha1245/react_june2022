const OnePost = ({post}) => {
    return (
        <div>
            <hr/>
            <h3>See more info</h3>
            <p>Body: {post.body}</p>
            <hr/>
        </div>
    );
};

export {OnePost}