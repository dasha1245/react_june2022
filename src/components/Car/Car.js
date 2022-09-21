import css from './Car.module.css'
import {carsSrvices} from "../../services";

const Car =(props) => {
    const {car, setCars} = props;

    const deleteCar = async () =>{
        await carsSrvices.deleteById(car.id);
        setCars((cars) => {
            const indexCarForDelete =  cars.findIndex(value => value.id === car.id);
            cars.splice(indexCarForDelete, 1)
            return [...cars]
        })
    };


    return (
        <div className={css.Car}>
            <div>
                <div>Id: {car.id}</div>
                <div>Model: {car.model}</div>
                <div>Price: {car.price}</div>
                <div>Year: {car.year}</div>
            </div>

            <div className={css.tools}>
                <button>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export {Car}