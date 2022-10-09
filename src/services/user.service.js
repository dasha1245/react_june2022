import {axiosService} from "./axios.service";
import {urls} from "../configs";

const UserService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`)
};

export {
    UserService
}