import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../redux";

const CarsForm = () => {
    const dispatch = useDispatch();
    const {currentCar} = useSelector(state => state.carsReducer)

    const {reset, register, handleSubmit, formState: {isValid}, setValue} = useForm();

    useEffect(() => {
        if(currentCar) {
            setValue('model', currentCar.model);
            setValue('price', currentCar.price);
            setValue('year', currentCar.year);
        }
    }, [currentCar])

    const submit = async (value) => {
        if (currentCar) {
            await dispatch(carsActions.updateCar({id: currentCar.id, car: value}))
        } else {
            const data =  await dispatch(carsActions.createCar(value))
        }
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'model'} {...register('model')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button>{currentCar ? 'Update': 'Save'}</button>
        </form>
    );

};

export {CarsForm}