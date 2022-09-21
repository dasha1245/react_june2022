import {axiosService} from "./axios_users";
import {urls} from "../configs";

const usersService = {
    getAll:() => axiosService.get(urls.users),
    create:(user) => axiosService.post(urls.comments, user)
}

export {usersService}