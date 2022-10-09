import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h4>{user.name}</h4>
                <p>Email: {user.email}</p>
                <button onClick={() => dispatch(userActions.selectUser(user))}>Select me!</button>
                <button onClick={() => dispatch(userActions.getById(user.id))}>User from API</button>
                <hr/>
            </div>
        </div>
    );
};

export {User}