import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {userValidator} from "../validators";
import {usersService} from "../services";

const UserForms = () => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        resolver:joiResolver(userValidator),
        mode:'all'
    })

    const submit = async (user) => {
        const {data} = await usersService.create(user)
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type = 'text' placeholder={'name'} {...register('name')}/>
            <input type = 'text' placeholder={'username'} {...register('username')}/>
            <input type = 'text' placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
}

export {UserForms}