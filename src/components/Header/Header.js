import {useSelector} from "react-redux";

import css from './Header.module.css'

const Header = () => {
    const {user} = useSelector(state => state.userReducer);
    return (
        <div className={css.Header}>
            {user&& <div>
                Your current user is: {user.name}
            </div>}
        </div>
    );
};

export {Header}