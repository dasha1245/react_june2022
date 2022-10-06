const OneUser = ({user}) => {
    return (
        <div>
            <hr/>
            <h3>More details about user.</h3>
            <h4>username: {user.username}</h4>
            <h4>email: {user.email}</h4>
            <p>city: {user.address.city}</p>
            <hr/>
        </div>
    );
};

export {OneUser}