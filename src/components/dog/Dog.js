import {useForm} from "react-hook-form";

const Dog = ({dispatch}) => {

    const {handleSubmit, register, formState:{isValid}, reset} = useForm()

    const submit = (data) =>{
        dispatch({...data, id: 'dog'})
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h5>Put dog's name</h5>
            <input type="text" placeholder={'Dog'} {...register('dog')}/>
            <button>Create</button>
            <hr/>
        </form>
    );
};

export {Dog}