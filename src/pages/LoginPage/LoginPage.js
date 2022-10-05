import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

import css from './LoginPage.module.css'
import {authService} from "../../services";

const LoginPage = () => {
    const {handleSubmit, register} = useForm()
    const navigate = useNavigate()

    const submit = async (user) =>{
        try {
        const {data} =await authService.login(user)
        authService.setTokens(data)
        navigate('/cars')

        }catch (e) {
            console.log(e);
        }
    }
    return (
        <div className={css.LoginPage}>

            <h3>Authenticate your account here:</h3>
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <input type="text" placeholder={'username'} {...register('username')} className={css.input}/>
                <input type="password" placeholder={'password'} {...register('password')} className={css.input}/>
                <button>Login</button>
                <p>If you don't have an account, go here</p> <Link to={'/register'}>Registration</Link>
            </form>

        </div>

    );
};

export {LoginPage}