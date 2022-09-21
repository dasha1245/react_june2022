import {useEffect, useState} from "react";

import {carsSrvices} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])

    useEffect(()=>{
        carsSrvices.getAll().then( value => setCars(value.data))
    }, [])

    return (
        <div>
            <CarForm setCars = {setCars}/>
            <hr/>
            {cars.map((car)=> <Car car={car} key = {car.id} setCars = {setCars}/>)}
        </div>
    );
};

export {Cars}