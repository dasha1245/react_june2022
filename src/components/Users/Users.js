import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, loading, error, userFromAPI} = useSelector(state => state.userReducer);

    useEffect(() => {
        // UserService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])
    return (
        <div>
            <h3>Users:</h3>
            {error&& <h4>Ooops... Error!</h4>}
            {loading&& <h4>Loading....</h4>}
            {userFromAPI&& <h5>Username: {userFromAPI.username}</h5>}
            {users.map((user) => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users}