import {useForm} from "react-hook-form";

const Cat = ({dispatch, state}) => {

    const {handleSubmit, register, formState:{isValid}, reset} = useForm()

    const submit = (data) =>{
        dispatch({...data, id: 'cat'})
        reset()
        // console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <h5>Put cat's name</h5>
            <input type="text" placeholder={'Cat'} {...register('cat')}/>
            <button>Create</button>
            <hr/>
        </form>
    );
};

export {Cat}