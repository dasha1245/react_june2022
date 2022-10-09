import {useDispatch, useSelector} from "react-redux";

import {carsActions} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const {currentCar} = useSelector(state => state.carsReducer);

    const updateCar =() => {
        if (!currentCar || currentCar.id !== car.id) {
            dispatch(carsActions.addCurrentCar(car))
        } else {
            dispatch(carsActions.addCurrentCar(null))
        }
    }

    return (
        <div>
            <div>
                <div> Model: {car.model}</div>
                <div>Price: {car.price}</div>
                <div>Year: {car.year}</div>
                <button onClick={() => dispatch(carsActions.deleteCar(car.id))}>Delete</button>
                <button onClick={updateCar}>Update</button>
                <hr/>
            </div>
        </div>
    );
};

export {Car}