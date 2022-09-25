import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const todosService = {
    getAll: () => axiosInstance.get(urls.todos)
}

export {todosService}