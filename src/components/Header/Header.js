import {useNavigate} from "react-router"

import css from './Header.module.css'

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className={css.Header}>
            <button onClick={() => navigate('/')} className={css.btns}>Home</button>
            <button onClick={() => navigate('/users')} className={css.btns}>Users Page</button>
            <button onClick={() => navigate('/posts')} className={css.btns}>Posts Page</button>
            <button onClick={() => navigate('/comments')} className={css.btns}>Comments Page</button>
        </div>
    );
};

export {Header}