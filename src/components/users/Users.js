import {useEffect, useState} from "react";
import User from "./User";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({})
    const lift = (obj) => {
    setUser(obj)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)

            })
    }, [])

    return(<div>
        <hr/>
        <h3>Info about each user:</h3>
        <div>
            <b>Username:</b>  {user.username} <br/>
            <b>Email:</b>  {user.email}
        </div>
        <hr/>

        {users.map((user) => (<User user = {user} lift = {lift}/>))}
    </div>)
}