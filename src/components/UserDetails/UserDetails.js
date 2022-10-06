import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect} from "react";
import {OneUser} from "./OneUser";

const UserDetails = () => {

    const {user} = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()

    const {userId} = useParams()

    useEffect(()=>{
        dispatch({type:'get_one_user', payload: Number(userId)})
    }, [userId])

    return (
        <div>
            {user && (<OneUser user={user}/>)}
        </div>
    );
};

export {UserDetails}