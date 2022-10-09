import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../redux";
import {Car} from "../Car/Car";



const Cars = () => {
    const dispatch = useDispatch();
    const {cars, error} = useSelector(state => state.carsReducer);

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [])
    return (
        <div>
            {error&& <h3>Ooooops... Error</h3>}
            {cars.map((car, index) => <Car car={car} key={index}/>)}
        </div>
    );
};

export {Cars}