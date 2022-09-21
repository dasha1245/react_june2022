import {useEffect, useState} from "react";

import {usersService} from "../services";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <h2>Users:</h2>
            {users.map((user) => <User user = {user} key = {user.id}/>)}
        </div>
    );
};

export {Users}
