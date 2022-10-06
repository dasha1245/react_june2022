import {useNavigate} from "react-router";

const User = ({user}) => {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <h4>id: {user.id}</h4>
                <p>name: {user.name}</p>
                <button onClick={() => navigate(user.id.toString())}> See details</button>
                <hr/>
            </div>
        </div>
    );
};

export {User}