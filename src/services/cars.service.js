import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const CarsService = {
    getAll: () => AxiosService.get(urls.cars),
    createCar: (car) => AxiosService.post(urls.cars, car),
    delete:(id) => AxiosService.delete(`${urls.cars}/${id}`),
    updateById:(id, car)=>AxiosService.put(`${urls.cars}/${id}`, car)
}

export {
    CarsService
}
