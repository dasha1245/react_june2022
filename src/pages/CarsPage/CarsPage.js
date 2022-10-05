import {Cars, CarsForm} from "../../components";
import {useEffect, useState} from "react";
import {CarsService} from "../../services";

const CarsPage = () => {

    const [cars, setCars] = useState([])

    useEffect(()=>{
        CarsService.getAll().then(({data}) => {
            setCars(data.data)
        })
    },[])

    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsPage}