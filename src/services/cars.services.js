import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const carsSrvices ={
    getAll:()=> axiosInstance.get(urls.cars),
    create:(car)=> axiosInstance.post(urls.cars, car),
    getById:(id)=> axiosInstance.get(`${urls.cars}/${id}`),
    updateById:(id)=> axiosInstance.put(`${urls.cars}/${id}`),
    deleteById:(id)=> axiosInstance.delete(`${urls.cars}/${id}`)
}

export {carsSrvices}