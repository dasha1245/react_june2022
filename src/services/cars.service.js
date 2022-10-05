import {axiosService} from "./axios.service";
import {urls} from "../configs";

const CarsService = {
    getAll: (page=1) => axiosService.get(urls.cars, {params:{page}})
}

export {CarsService}