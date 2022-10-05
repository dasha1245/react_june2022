import {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";

import {authService} from "../../services";
import css from './RegisterPage.module.css'

const RegisterPage = () => {

    const {handleSubmit, register, reset} = useForm()
    const [error, setError] = useState()
    const navigate = useNavigate()

    const submit = async (user) =>{
        try {
            await authService.register(user)
            reset()
            navigate('/login')
        } catch (e){
            setError(e.response.data?.username)
        }
    }
    return (
        <div className={css.RegistrationPage}>
            <h3>If you do not have an account, please register!</h3>
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                {error&&<div className={css.warning}>Ooops... {error}</div>}
                <h4>Do a registration here:</h4>
                <input type="text" placeholder={'username'} {...register('username')} className={css.input}/>
                <input type="password" placeholder={'password'} {...register('password')} className={css.input}/>
                <button>Register</button>
            </form>
        </div>

    );
};

export {RegisterPage}