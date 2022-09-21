import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {carValidator} from "../validators";
import {carsSrvices} from "../../services";

const CarForm = (props) => {
    const {setCars} = props

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode: 'all'
    })

    const submit = async (car) =>{
        const {data} = await carsSrvices.create(car)
        setCars(cars =>[...cars, data])
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model&&<p>{errors.model.message}</p>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<p>{errors.price.message}</p>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year&&<p>{errors.year.message}</p>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarForm}