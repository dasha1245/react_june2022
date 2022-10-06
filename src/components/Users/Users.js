import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usersService} from "../../services";
import {User} from "../User/User";

const Users = () => {

    const {users} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        usersService.getAll().then(({data}) => dispatch({type: 'get_users', payload: data}))
    }, [])

    return (
        <div>
            {users.map((user) => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users}